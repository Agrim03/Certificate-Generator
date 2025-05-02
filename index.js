function generateCertificate() {
  const name = document.getElementById("nameInput").value.trim();
  const course = document.getElementById("courseInput").value.trim();
  const instructor = document.getElementById("Instrucorinput").value.trim();

  if (name === "" || course === "" || instructor === "") {
    alert("Please enter your name, course, and instructor.");
    return;
  }

  document.getElementById("certName").textContent = name;
  document.getElementById("cname").textContent = course;
  document.getElementById("Iname").textContent = instructor;

  const today = new Date().toLocaleDateString();
  document.getElementById("date").textContent = today;

  // Clear existing QR code before generating a new one
  const qrDiv = document.getElementById("qrcode");
  qrDiv.innerHTML = "";

  const qrText = `Certificate for ${name}\nCourse: ${course}\nInstructor: ${instructor}\nDate: ${today}`;

  new QRCode(qrDiv, {
    text: qrText,
    width: 100,
    height: 100,
  });
}

function downloadCertificate() {
  const cert = document.getElementById("certificate");
  html2canvas(cert).then((canvas) => {
    const link = document.createElement("a");
    link.download = "MyCertificate.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}
