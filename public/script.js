const generateBtn = document.getElementById("generateBtn");
const textInput = document.getElementById("textInput");
const qrImage = document.getElementById("qrImage");
const downloadBtn = document.getElementById("downloadBtn");
function generateQr() {
    if(textInput.value.length>0) {
    qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textInput.value;
    qrImage.classList.add("qrcode.png");
    }}


generateBtn.addEventListener("click", async () => {

  const text = textInput.value.trim();

  if (!text) {
    alert("Introdu un text.");
    return;
  }

  try {

    const response = await fetch("/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text })
    });

    const data = await response.json();

    qrImage.src = data.qrCode;

    downloadBtn.href = data.qrCode;
    downloadBtn.style.display = "inline-block";

  } catch (error) {
    alert("And your code is...");
  }
generateQr();
});
