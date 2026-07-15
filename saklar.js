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
} 
