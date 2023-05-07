
const express = require("express");
const controller = require("../controller/userController");

const router = express.Router();

router.post("/signup", controller.signup);
router.post("/signin", controller.signin);
router.get("/", controller.getAll);
router.put("/activate/:username", controller.activate);
router.put("/deActivate/:username", controller.deActivate);

module.exports.router = router;