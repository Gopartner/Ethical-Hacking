def caesar_cipher(text, shift):
    result = ""

    for char in text:
        if char.isalpha():
            # Tentukan apakah karakter adalah huruf besar atau kecil
            is_upper = char.isupper()

            # Konversi karakter ke ASCII, geser, dan kembali ke huruf
            shifted_char = chr((ord(char) - ord('A' if is_upper else 'a') + shift) % 26 + ord('A' if is_upper else 'a'))

            # Tambahkan karakter yang telah dienkripsi ke hasil
            result += shifted_char
        else:
            # Jika karakter bukan huruf, tambahkan ke hasil tanpa mengubah
            result += char

    return result

# Minta input dari pengguna
plaintext = input("Masukkan teks yang ingin dienkripsi: ")
shift_amount = int(input("Masukkan jumlah pergeseran (shift): "))

# Enkripsi teks menggunakan Caesar Cipher
encrypted_text = caesar_cipher(plaintext, shift_amount)

# Tampilkan hasil enkripsi
print(f"Pesan Asli: {plaintext}")
print(f"Pesan Terenkripsi: {encrypted_text}")

