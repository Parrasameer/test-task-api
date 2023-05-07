
const express = require("express");
const controller = require("../controller/customerController");

const router = express.Router();

router.get("/", controller.getAll);
router.get("/page/:page", controller.get);
router.post("/", controller.add);
router.put("/", controller.update)
router.get("/:name", controller.getByName);
router.delete("/:name", controller.delete);

module.exports.router = router;