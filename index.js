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

  
  const qrDiv = document.getElementById("qrcode");
  qrDiv.innerHTML = "";

  const qrText = `${window.location.origin}/verify.html?name=${encodeURIComponent(name)}&course=${encodeURIComponent(course)}`;

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

function changeBackgroundImage(imagePath) {
  const certificate = document.getElementById("certificate");
  certificate.style.backgroundImage = `url('${imagePath}')`;
}

function redirectToVerify() {
    const name = document.getElementById("nameInput").value.trim();
    const course = document.getElementById("courseInput").value.trim();

    if (name === "" || course === "") {
      alert("Please enter your name and course.");
      return;
    }

    const url = `verify.html?name=${encodeURIComponent(name)}&course=${encodeURIComponent(course)}`;
    window.location.href = url;
  }
