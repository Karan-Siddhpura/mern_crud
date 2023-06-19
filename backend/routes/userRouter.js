const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userControl");
// require("dotenv").config();
// const baseUrl = "https://mern-crud-nn6k.onrender.com"
router.get(`/https://mern-crud-nn6k.onrender.com/get`, userCtrl.getUser);
router.post(`/https://mern-crud-nn6k.onrender.com/save`, userCtrl.saveUser);
router.put(`/https://mern-crud-nn6k.onrender.com/update/:id`, userCtrl.updateUser);
router.delete(`/https://mern-crud-nn6k.onrender.com/delete/:id`, userCtrl.deleteUser);

module.exports = router;