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

// Challenge hari 4 && 5 (Kalkulator Simple)

 function hitung() {
    let a = Number(document.getElementById("angka3").value);
    let b = Number(document.getElementById("angka4").value);
    let operator = document.getElementById("operator").value;

    if (operator === "+") {
        return a + b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "*") {
        return a * b;
    } else if (operator === "/") {
        return a / b;
    } else {
        return "Operator tidak valid";
    }
}

function hasil() {
    let hasilHitung = hitung();

    document.getElementById("hasil4").innerHTML = "Hasil: " + hasilHitung;
}


// Challenge hari 6

function buatProfil(nama, umur) {
    const namaSaya = "Nama: " + nama;
    const umurSaya = "Umur: " + umur;
    
        return namaSaya + "\n" + umurSaya + "tahun"; 
}

    let profil = buatProfil("Rndzhx", 25);

    console.log(profil);

// Challenge hari 7 (Array)

let nilai1 = [65, 80, 95, 70, 88];
let nilaiTertinggi = 0;

for (let i = 0; i < nilai1.length; i++) {
    if (nilai1[i] > nilaiTertinggi) {
        nilaiTertinggi = nilai1[i];
    } 
}

console.log("Nilai tertinggi "+ nilaiTertinggi);

// Challenge hari 8 (Array + Method)

let nama1 = ["Rahadian", "Andi", "Budi", "Citra"];

if (nama1.includes("Rahadian")) {
    console.log("Rahadian ditemukan!");
} else {
    console.log("Rahadian tidak ditemukan!");
}

console.log(nama1.indexOf("Deni"));


let teman = ["Andi", "Budi", "Citra", "Deni"];

let posisi = teman.indexOf("Citra");

if (posisi !== -1) {
    console.log("Citra ditemukan di index " + posisi)
} else {
    console.log("Citra tidak ditemukan");
}


let nama2 = ["Rahadian", "Andi", "Budi", "Citra"];

nama2.forEach(function(nama2Sekarang) {
    console.log("Halo " + nama2Sekarang + "!");
});


let nilai2 = [60, 80, 90, 55, 75];

nilai2.forEach(function(nilai2Sekarang) {
    if (nilai2Sekarang >= 75) {
        console.log("Lulus!");
    } else {
        console.log("Tidak Lulus!");
    }
});


let nilai3 = [65, 80, 95, 70, 88];

nilai3.forEach(function(nilai3Sekarang) {
    if (nilai3Sekarang >= 80) {
        console.log(nilai3Sekarang + " -> Lulus!");
    } else {
        console.log(nilai3Sekarang + " -> Tidak Lulus!");
    }
});
