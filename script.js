// TUGAS 1: Basic Javascript

// 1 & 3 Console log data diri dan comment single line
const nama = 'Fitri'; 
const asalDaerah = 'Bandung';
const tanggalLahir = '20 Juni 2001';
const umur =  '22';
const pekerjaan = 'mahasiswa';
console.log(nama, asalDaerah, tanggalLahir, umur, pekerjaan)

// 2 & 4 Interaksi user & comment multiple line
/*
prompt("Masukkan nama kamu");
prompt("Masukkan asal negara kamu");
confirm("Apakah data yang kamu masukkan sudah benar?");
alert("Terima kasih sudah mengisi prompt");
*/

// 5. Variable data diri nomor 1
const dataDiri = {
    nama: "Fitri",
    asalDaerah: "Bandung",
    tanggalLahir: '20 Juni 2001',
    umur: 22,
    pekerjaan: 'mahasiswa'
}
console.log(dataDiri)

//6. Arithmetic operations
const addition = 25 + 10;
const multiplication = 100* 2;
const division = 99 / 2;
const modulus = 99 % 2;
console.log(addition, multiplication, division, modulus)

// TUGAS 2: Conditional
// 1. Division's Roll
let div = 'HR';
if (div === 'HR') {
    console.log(`Saya adalah seorang ${div}, tugas saya adalah melakukan rekrutmen calon karyawan baru`); 
} else if (div === 'Purchasing') {
    console.log(`Saya adalah seorang ${div}, tugas saya adalah melakukan penawaran dan pembelian`); 
} else if (div === "Quality Control") {
    console.log(`Saya adalah seorang ${div}, tugas saya adalah memastikan kualitas produk`); 
}
console.log(div)

//2. Membandingkan Nilai
let a = 10;
let b = 5;
console.log(a > b ? `${a} lebih besar dari ${b}` : `${a} lebih kecil dari ${b}`)

//3. Switch-case
let number = 1;
switch (number) {
    case 1: {console.log('Ini adalah hari Minggu'); break};
    case 2: {console.log('Ini adalah hari Senin'); break};
    case 3: {console.log('Ini adalah hari Selasa'); break};
    case 4: {console.log('Ini adalah hari Rabu'); break};
    case 5: {console.log('Ini adalah hari Kamis'); break};
    case 6: {console.log('Ini adalah hari Jumat'); break};
    case 7: {console.log('Ini adalah hari Sabtu'); break};
    default: {console.log('Angka yang kamu masukkan salah atau yang kamu masukkan bukan angka')}
}
console.log(number);

//4. Switch-case game sederhana
let direction = "up";
switch (direction) {
    case "up": {console.log('Karakter berjalan ke atas'); break}
    case "down": {console.log('Karakter berjalan ke bawah'); break}
    case "left": {console.log('Karakter berjalan ke kiri'); break}
    case "right": {console.log('Karakter berjalan ke kanan'); break}
    default: {console.log('Karakter tidak bergerak')}
}
console.log(direction);

//TUGAS 3: LOOP
// 1. Maximum User
for (let i = 1; i <= 100; i++) {
    console.log(`user ke-${[i]}`)
}

//2. Penambahan Nilai
let nilai = 0;
for (let i = 0; i < 10; i++) {
    nilai+=2;
    console.log(nilai);
}

//3. Ganjil Genap
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${[i]} adalah bilangan genap`);
    } else {
        console.log(`${[i]} adalah bilangan ganjil`)
    }
}

//5. Program Kuis
let jawaban = "";
const jawabanBenar = "Impact Byte";

while (jawaban != jawabanBenar) {
  jawaban = prompt("Sebutkan kepanjangan dari nama IB (Impact Byte)?");

  if (jawaban === jawabanBenar) {
    alert("Selamat jawaban kamu benar!");
  } else {
    alert("Maaf, jawaban kamu salah. Silakan coba lagi.");
  }
}