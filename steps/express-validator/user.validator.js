// src/middlewares/validators/user.validator.js
const { body, param } = require("express-validator");

exports.registerValidator = [
  body("email").isEmail().withMessage("Invalid email address"),
  body("password").isLength({ min: 6 }).withMessage("Password must be >= 6 chars"),
];

exports.updateUserValidator = [
  param("id").isMongoId().withMessage("Invalid User ID"),
  body("name").optional().isString().withMessage("Name must be string"),
];
