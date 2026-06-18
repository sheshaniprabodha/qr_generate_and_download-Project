const buttons = document.querySelectorAll(".download-btn, .reset-btn");

// To Generate the QR code
function generateQR() {
  const qrText = document.getElementById("qr-text").value.trim();
  const qrCodeElement = document.getElementById("qrcode");
  const qrBtn = document.querySelector(".qr-btn");

  if (!qrText) {
    alert("Enter Text/URL in input");
    return;
  }

  qrCodeElement.innerHTML = "";

  const qrCode = new QRCode(qrCodeElement, {
    text: qrText,
    width: 356,
    height: 356,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });

  qrCodeElement.style.direction = "none";
  buttons.forEach((button) => (button.style.display = "block"));
  qrBtn.style.display = "none";
}

// Download the QR Code
function downloadQR() {
  const qrCodeImage = document.getElementById("qrcode").querySelector("img");
  const link = document.createElement("a");

  link.href = qrCodeImage.src;
  link.download = "qrcode.png";
  link.click();

  document.body.removeChild(link);
}

//Reset Button
function resetQr() {
  document.getElementById("qr-text").value = "";
  document.getElementById("qrcode").innerHTML = "";
  document.getElementById("qrcode").style.display = "none";
  buttons.forEach((button) => (button.style.display = "none"));
  document.querySelector(".qr-btn").style.display = "block";
}
