const express = require("express");
const QRCode = require("qrcode");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/generate", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        error: "Introduceți un text."
      });
    }

    const qrCode = await QRCode.toDataURL(text);

    res.json({
      qrCode
    });

  } catch (error) {
    res.status(500).json({
      error: "Eroare la generarea codului QR."
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Serverul rulează pe portul ${PORT}`);
});