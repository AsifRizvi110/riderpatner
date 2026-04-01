const express = require("express");
const cors = require("cors");
// Node 18+ me native fetch available hai
// agar purana Node hai: npm install node-fetch@2
// const fetch = require("node-fetch");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
  try {
    console.log("✅ REQUEST BODY:", req.body); // <-- check karo data aa raha hai ya nahi

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbx49Adp1ot8rGHePGkmgNm0XIRuOrShBBkjZ-WtLUvgQv_gOamr-zWIohcBO0f5edz7bQ/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );

    const text = await response.text(); // <-- Google Script response
    console.log("✅ GOOGLE RESPONSE:", text);

    res.json({ success: true, googleResponse: text });
  } catch (error) {
    console.error("❌ SERVER ERROR:", error); // <-- exact reason yahan dikhega
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));