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

// Challenge hari 8 (Array + Method("indexOf()", "forEach()")

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

// Challenge hari 9 (Array + Method("map()", "filter()", "find()")

let angka = [10, 20, 30, 40];

let hasil1 = angka.map(function(angkaSekarang) {
    return angkaSekarang * 2;
})

console.log(hasil1);


let nilai4 = [60, 75, 80, 55, 90, 65];

let nilaiLulus = nilai4.filter(function(nilai4Sekarang) {
    return nilai4Sekarang >= 75;
});

console.log(nilaiLulus);


let nilai5 = [55, 60, 72, 85, 90];

let nilaiPertama = nilai5.find(function(nilai5Sekarang) {
    return nilai5Sekarang >= 75;
});

console.log(nilaiPertama);


let nilai6 = [60, 75, 80, 55, 90, 65];

let nilaiLulus1 = nilai6.filter(function(nilai6Sekarang) {
    return nilai6Sekarang >= 75;
});

let nilaiBonus = nilaiLulus1.map(function(nilaiLulus1) {
    return nilaiLulus1 + 5;
});

console.log(nilaiLulus1);
console.log(nilaiBonus);

// Challenge hari 10 ("Object Javascript", "Array of Object")

let profil1 = {
    nama: "Rahadian",
    umur: 25,
    hobi: "Coding",
    kota: "Bandung"
};

console.log(profil1.nama);
console.log(profil1.umur);
console.log(profil1.hobi);
console.log(profil1.kota);


let profil2 = {
    nama: "Rahadian",
    umur: 25,
    hobi: "Coding",
    kota: "Bandung"
};

profil2.nama = "Rndzhx";
profil2.umur = 26;
profil2.hobi = "Frontend Development";
profil2.kota = "Jakarta";

console.log(profil2.nama);
console.log(profil2.umur);
console.log(profil2.hobi);
console.log(profil2.kota);


let profil3 = {
    nama: "Rndzhx",
    umur: 26
};

profil3.hobi = "Coding";
profil3.kota = "Bandung";
profil3.pekerjaan = "Frontend Developer";

console.log(profil3.nama);
console.log(profil3.umur);
console.log(profil3.hobi);
console.log(profil3.kota);
console.log(profil3.pekerjaan);


let teman1 = [
    {
        nama: "Andi",
        umur: 20
    },
    {
        nama: "Budi",
        umur: 22
    },
    {
        nama: "Citra",
        umur: 25
    }
];

console.log(teman1[0].nama);
console.log(teman1[1].umur);
console.log(teman1[2].nama);


let teman2 = [
    {
        nama: "Andi",
        umur: 20
    },
    {
        nama: "Budi",
        umur: 22
    },
    {
        nama: "Citra",
        umur: 25
    }
];

teman2.forEach(function(teman2Sekarang) {
    console.log(
       "Halo, nama saya " + teman2Sekarang.nama + " dan umur saya adalah " + teman2Sekarang.umur 
    );
});

// Challenge hari 11 (Mengolah Array of Object)

let siswa = [
    {
        nama: "Andi",
        nilai7: 80
    },
    {
        nama: "Budi",
        nilai7: 65
    },
    {
        nama: "Citra",
        nilai7: 90
    },
    {
        nama: "Deni",
        nilai7: 70
    }
];

let siswaLulus = siswa.filter(function(siswaSekarang) {
    return siswaSekarang.nilai7 >= 75;
});

let informasi = siswaLulus.map(function(siswaSekarang) {
    return siswaSekarang.nama + " mendapatkan nilai " + siswaSekarang.nilai7;
});

console.log(siswaLulus);
console.log(informasi);


let siswa1 = [
    {
        nama1: "Andi",
        nilai8: 80
    },
    {
        nama1: "Budi",
        nilai8: 65
    },
    {
        nama1: "Citra",
        nilai8: 90
    },
    {
        nama1: "Deni",
        nilai8: 70
    }
];

let siswaBagus = siswa1.filter(function(siswa1Sekarang) {
    return siswa1Sekarang.nilai8 >= 80;
});

let namaSiswa = siswaBagus.map(function(siswa1Sekarang) {
    return siswa1Sekarang.nama1;
});

console.log(namaSiswa);


let produk = [
    {
        nama: "Laptop",
        harga: 8000000
    },
    {
        nama: "Mouse",
        harga: 150000
    },
    {
        nama: "Keyboard",
        harga: 500000
    },
    {
        nama: "Monitor",
        harga: 2500000
    }
];

let produkMurah = produk.filter(function(produkSekarang) {
    return produkSekarang.harga < 1000000;
});

let namaProduk = produkMurah.map(function(produkSekarang) {
    return produkSekarang.nama;
});

console.log(produkMurah);
console.log(namaProduk);

// Challenge hari 12 ("reduce()")

let nilai = [70, 80, 90, 60, 100];

let totalNilai = nilai.reduce(function(totalSekarang, nilaiSekarang) {
    return totalSekarang + nilaiSekarang;
}, 0);

console.log(totalNilai);

// Challenge hari 13 (DOM (Document Object Model))

document.getElementById("nama").innerHTML = "Halo, Rndzhx!";


function ubahJudul() {
    document.getElementById("judul").innerHTML = "Halo, Rndzhx! Selamat datang!";
}


function sapa() {
    let nama3 = document.getElementById("nama3").value;

    document.getElementById("hasil5").innerHTML = `Halo, ${nama3}!`;
}


function cekNilai() {
    let nilai9 = Number(document.getElementById("nilai9").value);

    if (nilai9 >= 75) {
        document.getElementById("hasilNilai").innerHTML = "Selamat, kamu Lulus!";
    } else {
        document.getElementById("hasilNilai").innerHTML = "Maaf, kamu Tidak Lulus!";
    }
}


function cekNilai1() {
    let nilai10 = Number(document.getElementById("nilai10").value);

    if (nilai10 < 0 || nilai10 > 100) {
        document.getElementById("hasilNilai1").innerHTML = "Nilai tidak valid!";
    } else {
        if (nilai10 >= 75) {
            document.getElementById("hasilNilai1").innerHTML = "Selamat, anda Lulus!";
        } else {
            document.getElementById("hasilNilai1").innerHTML = "Maaf, anda Tidak Lulus!";
        } if (nilai10 >= 90) {
            document.getElementById("hasilGrade").innerHTML = "Grade: A";
        } else if (nilai10 >= 80) {
            document.getElementById("hasilGrade").innerHTML = "Grade: B";
        } else if (nilai10 >= 70) {
            document.getElementById("hasilGrade").innerHTML = "Grade: C";
        } else if (nilai10 >= 60) {
            document.getElementById("hasilGrade").innerHTML = "Grade: D";
        } else {
            document.getElementById("hasilGrade").innerHTML = "Grade: E";
        }
    }
}


function cekNilai2() {
    let nilai11 = Number(document.getElementById("nilai11").value);

    if (nilai11 < 0 || nilai11 > 100) {
        document.getElementById("hasilNilai2").innerHTML = "Nilai tidak valid!";
    } else {
        if (nilai11 >= 75) {
            document.getElementById("hasilNilai2").innerHTML = "Selamat, Bos Lulus!";
            document.getElementById("hasilNilai2").style.color = "green";
        } else {
            document.getElementById("hasilNilai2").innerHTML = "Maaf Bos, kamu Tidak Lulus!";
            document.getElementById("hasilNilai2").style.color = "red";
        } if (nilai11 >= 90) {
            document.getElementById("hasilGrade1").innerHTML = "Grade: A";
            document.getElementById("hasilGrade1").style.color = "green";
        } else if (nilai11 >= 80) {
            document.getElementById("hasilGrade1").innerHTML = "Grade: B";
            document.getElementById("hasilGrade1").style.color = "green";
        } else if (nilai11 >= 70) {
            document.getElementById("hasilGrade1").innerHTML = "Grade: C";
            document.getElementById("hasilGrade1").style.color = "orange";
        } else if (nilai11 >= 60) {
            document.getElementById("hasilGrade1").innerHTML = "Grade: D";
            document.getElementById("hasilGrade1").style.color = "red";
        } else {
            document.getElementById("hasilGrade1").innerHTML = "Grade: E";
            document.getElementById("hasilGrade1").style.color = "red";
        }
    }
}

// Challenge hari 14 (addEventListener("click", "input", "mouseover"))

let tombol1 = document.getElementById("tombol1");

tombol1.addEventListener("click", function() {
    document.getElementById("hasil6").innerHTML = "Halo Rndzhx! kamu berhasil menggunakan Event DOM!";
});


let nama4 = document.getElementById("nama4");

nama4.addEventListener("input", function() {
    document.getElementById("hasil7").innerHTML = nama4.value;
});


let tombol2 = document.getElementById("tombol2");

tombol2.addEventListener("mouseover", function() {
    document.getElementById("hasil8").innerHTML = "Mouse sedang berada di tombol!";
});


let tombol3 = document.getElementById("tombol3");

tombol3.addEventListener("mouseover", function() {
    document.getElementById("hasil9").innerHTML = "Mouse masuk ke tombol!";
});

tombol3.addEventListener("mouseout", function() {
    document.getElementById("hasil9").innerHTML = "Mouse meninggalkan tombol!";
});


let nama5 = document.getElementById("nama5");
let tombol4 = document.getElementById("tombol4");

tombol4.addEventListener("click", function() {
    document.getElementById("hasil10").innerHTML = nama5.value;
});

tombol4.addEventListener("mouseover", function() {
    document.getElementById("hasil10").innerHTML = `Halo, ${nama5.value}! Selamat datang!`;
});

tombol4.addEventListener("mouseout", function() {
    document.getElementById("hasil10").innerHTML = "Masukkan nama kamu. . .";
});


let nama6 = document.getElementById("nama6");
let tombol5 = document.getElementById("tombol5");

tombol5.addEventListener("click", function() {

    if (nama6.value === "") {
        document.getElementById("hasil11").innerHTML = "Nama wajib diisi!";
        document.getElementById("hasil11").style.color = "red";
    } else  {
        document.getElementById("hasil11").innerHTML = `Halo, ${nama6.value}!`;
        document.getElementById("hasil11").style.color = "green";
    }
});


let nama7 = document.getElementById("nama7");
let umur7 = document.getElementById("umur7");
let tombol6 = document.getElementById("tombol6");

tombol6.addEventListener("click", function() {

    let umur = Number(umur7.value);

    if (nama7.value === "") {
        document.getElementById("hasil12").innerHTML = "Nama wajib diisi!";
    } else if (umur7.value === "") {
        document.getElementById("hasil12").innerHTML = "Umur wajib diisi!";
    } else if (umur < 0 || umur > 100) {
        document.getElementById("hasil12").innerHTML = "Umur tidak valid!";
    } else if (umur >= 18) {
        document.getElementById("hasil12").innerHTML = `Halo, ${nama7.value}! Anda sudah dewasa!`;
    } else {
        document.getElementById("hasil12").innerHTML = `Halo, ${nama7.value}! Anda masih di bawah umur!`;
    }
});


let nama8 = document.getElementById("nama8");
let umur8 = document.getElementById("umur8");
let email8 = document.getElementById("email8");
let tombol8 = document.getElementById("tombol8");

tombol8.addEventListener("click", function() {

    let umur1 = Number(umur8.value);

    if (nama8.value === "") {
        document.getElementById("hasil13").innerHTML = "Nama wajib diisi!";
    } else if (umur8.value === "") {
        document.getElementById("hasil13").innerHTML = "Umur wajib diisi!";
    } else if (umur1 < 0 || umur1 > 100) {
        document.getElementById("hasil13").innerHTML = "Umur tidak valid!";
    } else if (email8.value === "") {
        document.getElementById("hasil13").innerHTML = "Email wajib diisi!";
    } else if (email8.value.includes("@") === false) {
        document.getElementById("hasil13").innerHTML = "Email tidak valid!";
    } else {
        document.getElementById("hasil13").innerHTML = `Pendaftaran berhasil! Selamat datang, ${nama8.value}!`;
    }
});


let nama9 = document.getElementById("nama9");
let umur9 = document.getElementById("umur9");
let email9 = document.getElementById("email9");
let tombol9 = document.getElementById("tombol9");
let hasil14 = document.getElementById("hasil14");

tombol9.addEventListener("click", function() {

    let umur2 = Number(umur9.value);

    if (nama9.value === "") {
        hasil14.innerHTML = "Nama wajib diisi!";
        hasil14.style.color = "red";
    } else if (umur9.value === "") {
        hasil14.innerHTML = "Umur wajib diisi!";
        hasil14.style.color = "red";
    } else if (umur2 < 0 || umur2 > 100) {
        hasil14.innerHTML = "Umur tidak valid!";
        hasil14.style.color = "red";
    } else if (email9.value === "") {
        hasil14.innerHTML = "Email wajib diisi!";
        hasil14.style.color = "red";
    } else if (email9.value.includes("@") === false) {
        hasil14.innerHTML = "Email tidak valid!";
        hasil14.style.color = "red";
    } else {
        hasil14.innerHTML = `Pendaftaran berhasil! Selamat datang, ${nama9.value}!`;
        hasil14.style.color = "green";
    }
});


let nama10 = document.getElementById("nama10");
let password10 = document.getElementById("password10");
let tombol10 = document.getElementById("tombol10");
let hasil15 = document.getElementById("hasil15");

tombol10.addEventListener("click", function() {

    if (nama10.value === "") {
        hasil15.innerHTML = "Nama wajib diisi!";
        hasil15.style.color = "red";
    } else if (password10.value === "") {
        hasil15.innerHTML = "Password wajib diisi!";
        hasil15.style.color = "red";
    } else if (nama10.value === "Rndzhx" && password10.value === "12345") {
        hasil15.innerHTML = `Login berhasil! Selamat datang, ${nama10.value}!`;
        hasil15.style.color = "green";
    } else {
        hasil15.innerHTML = "Username atau Password salah!";
        hasil15.style.color = "red";
    }
});
