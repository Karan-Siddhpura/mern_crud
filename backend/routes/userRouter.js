const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userControl");
require("dotenv").config();
const baseUrl = "https://mern-crud-nn6k.onrender.com"
router.get(`/${baseUrl}/get`, userCtrl.getUser);
router.post(`/${baseUrl}/save`, userCtrl.saveUser);
router.put(`/${baseUrl}/update/:id`, userCtrl.updateUser);
router.delete(`/${baseUrl}/delete/:id`, userCtrl.deleteUser);

module.exports = router;