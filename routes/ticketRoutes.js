
const express = require("express");
const controller = require("../controller/ticketController");

const router = express.Router();

router.get("/", controller.get);
router.get("/:desc", controller.getByDesc);
router.post("/", controller.add);
router.put("/", controller.update);

module.exports.router = router;