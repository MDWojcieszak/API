const express = require("express");
const router = express.Router();
const printerController = require("../controllers/printerControler");

router.get("/", printerController.get_printers);

router.get("/:printerId", printerController.get_printer_by_id);

router.post("/", printerController.create_printer);

router.patch("/:printerId", printerController.change_printer);

router.delete("/:printerId", printerController.delete_printer);

module.exports = router;
