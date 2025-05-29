const express = require("express");
const router = express.Router();
const RegistroController = require("../controllers/registroController");

const registroController = new RegistroController();

router.get("/", (req, res) => {
  res.render("registro");
});

router.post("/", (req, res) => {
  registroController.registerUser(req, res);
});

module.exports = router;
