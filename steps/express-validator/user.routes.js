// src/routes/user.routes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const validate = require("../middlewares/validate");
const { registerValidator, updateUserValidator } = require("../middlewares/validators/user.validator");

router.post("/register", validate(registerValidator), userController.register);
router.put("/:id", validate(updateUserValidator), userController.updateUser);

module.exports = router;
