const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Caesar Cipher Encryption
function caesarEncrypt(plaintext, shift) {
  let result = '';

  for (let i = 0; i < plaintext.length; i++) {
    let char = plaintext[i];

    if (char.match(/[a-zA-Z]/)) {
      let isUpperCase = char === char.toUpperCase();
      let code = char.charCodeAt(0);

      // Mengatasi pergeseran penuh putaran
      let shiftedCode = (code - (isUpperCase ? 65 : 97) + shift) % 26;
      if (shiftedCode < 0) shiftedCode += 26;

      let encryptedChar = String.fromCharCode(shiftedCode + (isUpperCase ? 65 : 97));
      result += encryptedChar;
    } else {
      result += char; // Tambahkan karakter apa adanya jika bukan huruf
    }
  }

  return result;
}

// Caesar Cipher Decryption
function caesarDecrypt(encryptedText, shift) {
  return caesarEncrypt(encryptedText, -shift);
}

// Fungsi untuk input teks dan angka pergeseran dari pengguna
function getInput(prompt) {
  return new Promise(resolve => {
    rl.question(prompt, input => {
      resolve(input);
    });
  });
}

// Fungsi untuk menjalankan enkripsi
async function processEncryption() {
  let text = await getInput('Masukkan teks yang ingin dienkripsi: ');
  let shift = parseInt(await getInput('Masukkan jumlah pergeseran (shift): '));

  let result = caesarEncrypt(text, shift);

  console.log(`\nTeks Enkripsi: ${text}`);
  console.log(`Teks Terenkripsi: ${result}\n`);
}

// Fungsi untuk menjalankan dekripsi
async function processDecryption() {
  let text = await getInput('Masukkan teks yang ingin didekripsi: ');
  let shift = parseInt(await getInput('Masukkan jumlah pergeseran (shift): '));

  let result = caesarDecrypt(text, shift);

  console.log(`\nTeks Dekripsi: ${text}`);
  console.log(`Teks Terdekripsi: ${result}\n`);
}

// Meminta pengguna untuk memilih proses
async function main() {
  let choice = await getInput('Pilih proses (1: Enkripsi, 2: Dekripsi): ');

  if (choice === '1') {
    await processEncryption();
  } else if (choice === '2') {
    await processDecryption();
  } else {
    console.log('Pilihan tidak valid.');
  }

  rl.close();
}

// Jalankan program utama
main();

