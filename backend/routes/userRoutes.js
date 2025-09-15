// "dev": "next dev --turbopack",
    // "dev": "concurrently \"npm start\" \"cd .. && cd backend && npm start\"",


const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/get-data", async (req, res) => {
    console.log(req.body)
  try {
    const user = await User.create(req.body);

    return res.status(200).json({
      message: "اطلاعات ذخیره شد",
      user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
});

module.exports = router;
