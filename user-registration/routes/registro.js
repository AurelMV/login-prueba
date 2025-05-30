const express = require("express");
const router = express.Router();
const registroController = require("../controllers/registroController");

router.get("/", (req, res) => {
  res.render("registro", { users: registroController.users });
});

router.post("/", (req, res) => {
  registroController.registerUser(req, res);
});

module.exports = router;
