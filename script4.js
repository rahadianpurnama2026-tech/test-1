let nama = "Rahadian";
const umur = 20;
let hobi = "Coding";

let namaBaru = "Rndzhx";
let umurBaru = 25;
let lulus = true;

console.log(nama);
console.log(umur);
console.log(hobi);

console.log(typeof namaBaru);
console.log(typeof umurBaru);
console.log(typeof lulus);


alert(`Halo, nama saya ${nama}, umur saya ${umur} tahun, dan hobi saya adalah ${hobi}`);

// Kalkulator sederhana
function tambah() {
    let angka1 = Number(document.getElementById("angka1").value);
    let angka2 = Number(document.getElementById("angka2").value);
    let hasil = angka1 + angka2;

    document.getElementById("hasil").innerHTML = `Hasil: ${hasil}`;
}

function kurang() {
    let angka1 = Number(document.getElementById("angka1").value);
    let angka2 = Number(document.getElementById("angka2").value);
    let hasil = angka1 - angka2;

    document.getElementById("hasil").innerHTML = `Hasil: ${hasil}`;
}

function kali() {
    let angka1 = Number(document.getElementById("angka1").value);
    let angka2 = Number(document.getElementById("angka2").value);
    let hasil = angka1 * angka2;

    document.getElementById("hasil").innerHTML = `Hasil: ${hasil}`;
}

function bagi() {
    let angka1 = Number(document.getElementById("angka1").value);
    let angka2 = Number(document.getElementById("angka2").value);
    let hasil = angka1 / angka2;

    document.getElementById("hasil").innerHTML = `Hasil: ${hasil}`;
}

// Cek Kelulusan
function cek() {
    let nilai = Number(document.getElementById("nilai").value);

    if (nilai < 0 || nilai > 100) {
        document.getElementById("hasil1").innerHTML = "Nilai tidak valid. Silahkan masukkan nilai antara 0-100.";
    } 
    else if (nilai >= 75) {
        document.getElementById("hasil1").innerHTML = "Selamat, anda Lulus!";
    } else {
        document.getElementById("hasil1").innerHTML = "Maaf, anda Tidak Lulus.";
    }
}

// Tugas hari 5 (Sistem Grade, Cek Usia)
