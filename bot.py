import time
import sqlite3
import os
from instagrapi import Client
from qris_saweria import create_payment_qr, check_paid_status

# ================= KONFIGURASI =================
IG_USER = 'deassavina_'
IG_PASS = 'naya0131'
SAWERIA_USER = 'apiipp'
ADMIN_ID_IG = '21898316746' # PK ID Akun IG lu (untuk fitur admin)
DB_NAME = 'bot_maps.db'
QR_DIR = 'qris_temp'
# ===============================================

if not os.path.exists(QR_DIR):
    os.makedirs(QR_DIR)

cl = Client()
print("Sedang login ke Instagram...")
try:
    cl.login(IG_USER, IG_PASS)
    print("Login Berhasil!")
except Exception as e:
    print(f"Login Gagal: {e}")
    exit()

def init_db():
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS maps
                 (id INTEGER PRIMARY KEY AUTOINCREMENT, link TEXT, photo_id TEXT, price INTEGER, notes TEXT, sold INTEGER DEFAULT 0)''')
    conn.commit()
    conn.close()

init_db()

def handle_logic():
    while True:
        try:
            # Ambil pesan masuk yang belum dibaca
            threads = cl.direct_threads()
            for thread in threads:
                # Cek jika ada pesan baru
                if thread.read_state == 1: # 1 berarti ada pesan belum dibaca
                    last_msg = thread.messages[0]
                    text = last_msg.text.lower()
                    user_id = str(last_msg.user_id)
                    thread_id = thread.id

                    # --- MENU UTAMA ---
                    if text in ['p', 'halo', 'menu', 'beli']:
                        msg = ("✨ SELAMAT DATANG ✨\n\n"
                               "Silakan pilih paket:\n"
                               "- Ketik 'Beli 50' untuk Paket 50k\n"
                               "- Ketik 'Beli 100' untuk Paket 100k")
                        cl.direct_send(msg, thread_ids=[thread_id])
                        cl.direct_thread_mark_as_seen(thread_id)

                    # --- PROSES BELI 50K ---
                    elif 'beli 50' in text:
                        process_order(thread_id, user_id, 50000)
                        cl.direct_thread_mark_as_seen(thread_id)

                    # --- PROSES BELI 100K ---
                    elif 'beli 100' in text:
                        process_order(thread_id, user_id, 100000)
                        cl.direct_thread_mark_as_seen(thread_id)

            time.sleep(15) # Delay biar gak kena spam/banned
        except Exception as e:
            print(f"Error Polling: {e}")
            time.sleep(30)

def process_order(thread_id, user_id, amount):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute("SELECT id, link, photo_id, notes FROM maps WHERE sold = 0 AND price = ? LIMIT 1", (amount,))
    tgt = c.fetchone()
    conn.close()

    if not tgt:
        cl.direct_send(f"❌ Stok paket {amount//1000}k sedang habis, bos!", thread_ids=[thread_id])
        return

    mid, mlink, mphoto, mnotes = tgt
    qr_path = os.path.join(QR_DIR, f"q_{user_id}.png")

    try:
        cl.direct_send(f"Sip! Menyiapkan QRIS Rp{amount:,}. Tunggu bentar...", thread_ids=[thread_id])
        
        # Generate QR
        _, tid, _ = create_payment_qr(SAWERIA_USER, amount, "p@mail.com", qr_path, False)
        
        # Kirim Foto QRIS
        cl.direct_send_photo(qr_path, caption=f"Silakan scan QRIS ini.\nLink dikirim otomatis setelah lunas.", thread_ids=[thread_id])

        # Polling Lunas (3 Menit)
        for _ in range(18):
            time.sleep(10)
            if check_paid_status(tid):
                conn = sqlite3.connect(DB_NAME)
                c = conn.cursor()
                c.execute("UPDATE maps SET sold = 1 WHERE id = ?", (mid,))
                conn.commit()
                conn.close()
                
                # Kirim Link Maps + Note (Instagram tidak bisa kirim link & foto dalam 1 pesan dengan mudah via API ini)
                cl.direct_send(f"✅ LUNAS!\n\n📍 Link: {mlink}\n📝 Note: {mnotes}", thread_ids=[thread_id])
                
                if os.path.exists(qr_path): os.remove(qr_path)
                return
        
        cl.direct_send("⏰ Waktu habis. Transaksi dibatalkan.", thread_ids=[thread_id])
        if os.path.exists(qr_path): os.remove(qr_path)
    except Exception as e:
        print(f"Error Order: {e}")
        cl.direct_send("❌ Gagal membuat pembayaran.", thread_ids=[thread_id])

if __name__ == "__main__":
    handle_logic()
