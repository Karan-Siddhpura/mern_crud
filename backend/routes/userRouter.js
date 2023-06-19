const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userControl");
// require("dotenv").config();
// const baseUrl = "https://mern-crud-nn6k.onrender.com"
router.get(`/get`, userCtrl.getUser);
router.post(`/save`, userCtrl.saveUser);
router.put(`/update/:id`, userCtrl.updateUser);
router.delete(`/delete/:id`, userCtrl.deleteUser);

module.exports = router;