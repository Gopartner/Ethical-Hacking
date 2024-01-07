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
      let encryptedChar = String.fromCharCode((code - (isUpperCase ? 65 : 97) + shift) % 26 + (isUpperCase ? 65 : 97));
      result += encryptedChar;
    } else {
      result += char;
    }
  }

  return result;
}

// Caesar Cipher Decryption
function caesarDecrypt(encryptedText, shift) {
  return caesarEncrypt(encryptedText, -shift);
}

// Fungsi untuk input teks dan jumlah pergeseran dari pengguna
function getInput(prompt) {
  return new Promise(resolve => {
    rl.question(prompt, input => {
      resolve(input);
    });
  });
}

// Fungsi untuk menjalankan enkripsi atau dekripsi
async function processCipher(isEncrypt) {
  let text = await getInput(`Masukkan teks yang ingin ${isEncrypt ? 'di' : 'd'}enkripsi: `);
  let shift = parseInt(await getInput(`Masukkan jumlah pergeseran (shift): `));

  let result = isEncrypt ? caesarEncrypt(text, shift) : caesarDecrypt(text, shift);

  console.log(`\nTeks ${isEncrypt ? 'En' : 'De'}kripsi: ${text}`);
  console.log(`Teks ${isEncrypt ? 'En' : 'De'}kripsi: ${result}\n`);
}

// Jalankan proses enkripsi
processCipher(true).then(() => {
  // Setelah enkripsi selesai, jalankan proses dekripsi
  return processCipher(false);
}).then(() => {
  // Tutup interface setelah proses selesai
  rl.close();
});

