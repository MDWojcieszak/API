const express = require("express");
const router = express.Router();
const printerController = require("../controllers/printerControler");

router.post("/", printerController.post_printers);

router.get("/brands/", printerController.get_printers_brands);

router.get("/brands/:brandName", printerController.get_printers_by_brand);

router.get("/:printerId", printerController.get_printer_by_id);

router.post("/create", printerController.create_printer);

router.patch("/:printerId", printerController.change_printer);

router.delete("/:printerId", printerController.delete_printer);

module.exports = router;
