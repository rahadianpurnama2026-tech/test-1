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
        document.getElementById("hasil1").innerHTML = "Nilai tidak valid!";
    } else {

        if (nilai >= 75) {
            document.getElementById("hasil1").innerHTML = "Selamat, anda Lulus!";
        }
        else {
            document.getElementById("hasil1").innerHTML = "Maaf, anda Tidak Lulus!"
        }
    
        if (nilai >= 90) {
            document.getElementById("hasil2").innerHTML = "Grade: A";
        }
        else if (nilai >= 80) {
            document.getElementById("hasil2").innerHTML = "Grade: B";
        }
        else if (nilai >= 70) {
            document.getElementById("hasil2").innerHTML = "Grade: C";
        }
        else if (nilai >= 60) {
            document.getElementById("hasil2").innerHTML = "Grade: D";
        }
        else {
            document.getElementById("hasil2").innerHTML = "Grade: E";
        }
    }
}

// Cek Usia
function usia() {
    let usia = Number(document.getElementById("usia").value);

    if (usia < 0 || usia > 100) {
        document.getElementById("hasil3").innerHTML = "Usia tidak valid!";
    } else {
        if (usia >= 0 && usia <= 2) {
            document.getElementById("hasil3").innerHTML = "Anda masih bayi!";
        } else if (usia >= 3 && usia <= 5) {
            document.getElementById("hasil3").innerHTML = "Anda masih balita!";
        } else if (usia >= 6 && usia <= 12) {
            document.getElementById("hasil3").innerHTML = "Anda anak-anak!";
        } else if (usia >= 13 && usia <= 19) {
            document.getElementById("hasil3").innerHTML = "Anda remaja!";
        } else if (usia >= 20 && usia <= 59) {
            document.getElementById("hasil3").innerHTML = "Anda sudah dewasa!";
        } else {
            document.getElementById("hasil3").innerHTML = "Anda sudah Lansia!";
        }
    }
}
