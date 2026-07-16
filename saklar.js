function saklar() {
  let toggle1 = document.getElementById("default-toggle1")
  let toggle2= document.getElementById("default-toggle2")
  let toggle3 = document.getElementById("default-toggle3")
  let toggle4 = document.getElementById("default-toggle4")
  let toggle5 = document.getElementById("default-toggle5")
  let toggle6 = document.getElementById("default-toggle6")
  let toggle7 = document.getElementById("default-toggle7")

  let lampu1 = document.getElementById("lampu1");
  let lampu2 = document.getElementById("lampu2");
  let lampu3 = document.getElementById("lampu3");
  let lampu4 = document.getElementById("lampu4");
  let lampu5 = document.getElementById("lampu5");
  let lampu6 = document.getElementById("lampu6");
  let lampu7 = document.getElementById("lampu7");
  
  let master = document.getElementById("master-toggle");

  if (toggle1.checked) {
     lampu1.src = "assets/images/on.gif";
  } else {
      lampu1.src = "assets/images/off.gif";
  }

  if (toggle2.checked) {
     lampu2.src = "assets/images/on.gif";
  } else {
      lampu2.src = "assets/images/off.gif";
  }

  if (toggle3.checked) {
     lampu3.src = "assets/images/on.gif";
  } else {
      lampu3.src = "assets/images/off.gif";
  }

  if (toggle4.checked) {
     lampu4.src = "assets/images/on.gif";
  } else {
      lampu4.src = "assets/images/off.gif";
  }
  
  if (toggle5.checked) {
     lampu5.src = "assets/images/on.gif";
  } else {
      lampu5.src = "assets/images/off.gif";
  }

  if (toggle6.checked) {
     lampu6.src = "assets/images/on.gif";
  } else {
      lampu6.src = "assets/images/off.gif";
  }

  if (toggle7.checked) {
     lampu7.src = "assets/images/on.gif";
  } else {
      lampu7.src = "assets/images/off.gif";
  }

  // Cek apakah ada lampu yang menyala
if (
    toggle1.checked ||
    toggle2.checked ||
    toggle3.checked ||
    toggle4.checked ||
    toggle5.checked ||
    toggle6.checked ||
    toggle7.checked
) {
    document.body.style.backgroundColor = "#fef08a";
} else {
    document.body.style.backgroundColor = "#1f2937";
}

  // Hitung jumlah lampu yang menyala
let jumlahLampu = 0;

if (toggle1.checked) jumlahLampu++;
if (toggle2.checked) jumlahLampu++;
if (toggle3.checked) jumlahLampu++;
if (toggle4.checked) jumlahLampu++;
if (toggle5.checked) jumlahLampu++;
if (toggle6.checked) jumlahLampu++;
if (toggle7.checked) jumlahLampu++;

// Ubah warna background berdasarkan jumlah lampu yang menyala
switch (jumlahLampu) {
    case 0:
        document.body.style.backgroundColor = "#1f2937"; // gelap
        break;

    case 1:
    case 2:
        document.body.style.backgroundColor = "#4b5563"; // abu-abu terang
        break;

    case 3:
    case 4:
        document.body.style.backgroundColor = "#fde68a"; // kuning muda
        break;

    case 5:
    case 6:
        document.body.style.backgroundColor = "#facc15"; // kuning terang
        break;

    case 7:
        document.body.style.backgroundColor = "#fef08a"; // sangat terang
        break;
}

  master.checked =
    toggle1.checked &&
    toggle2.checked &&
    toggle3.checked &&
    toggle4.checked &&
    toggle5.checked &&
    toggle6.checked &&
    toggle7.checked;
  
}

function semuaLampu() {
    let master = document.getElementById("master-toggle");

    for (let i = 1; i <= 7; i++) {
        document.getElementById("default-toggle" + i).checked = master.checked;
    }

    // Perbarui semua lampu
    saklar();
}
