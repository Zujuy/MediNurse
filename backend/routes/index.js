const express = require("express");
const router = express.Router();
const catchErrors = require("../middlewares/catchErrors");

/* GET home page */
router.get("/", (req, res, next) => {
    res.send("Bienvenido al 3er proyecto");
  });

  module.exports = router;