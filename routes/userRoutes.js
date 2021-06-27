 const express = require("express");
 const router = express.Router();
 const { Register, Login } = require("../controllers/userController");
 const { isAuth } = require("../middleware/isAuth");
 const {
   registerValidator,
   validation,
   loginValidator,
 } = require("../middleware/userValidator");
 router.post("/register", registerValidator(), validation, Register);
 router.post("/login", loginValidator(), validation, Login);
 router.get("/current", isAuth, (req, res) => {
   res.send({ msg: "get user successfully", user: req.user });
 });
  module.exports = router;