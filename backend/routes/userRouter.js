const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userControl");

router.get("/get", userCtrl.getUser);
router.post("/save", userCtrl.saveUser);
router.put("/update/:id", userCtrl.updateUser);
router.delete("/delete/:id", userCtrl.deleteUser);

module.exports = router;