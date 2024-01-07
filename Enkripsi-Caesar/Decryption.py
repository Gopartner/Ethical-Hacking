# Decryption.py

def caesar_decipher(encrypted_text, shift):
    result = ""

    for char in encrypted_text:
        if char.isalpha():
            is_upper = char.isupper()
            shifted_char = chr((ord(char) - ord('A' if is_upper else 'a') - shift) % 26 + ord('A' if is_upper else 'a'))
            result += shifted_char
        else:
            result += char

    return result

# Minta input dari pengguna
encrypted_text = input("Masukkan teks yang ingin didekripsi: ")
shift_amount = int(input("Masukkan jumlah pergeseran (shift) yang digunakan: "))

# Dekripsi teks menggunakan Caesar Cipher
decrypted_text = caesar_decipher(encrypted_text, shift_amount)

# Tampilkan hasil dekripsi
print(f"Pesan Terenkripsi: {encrypted_text}")
print(f"Pesan Terdekripsi: {decrypted_text}")

