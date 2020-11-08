const express = require("express");
const router = express.Router();
const printerSettingsController = require("../controllers/printerSettingsController");
const requireAuth = require("../middlewares/authentication");

router.get("/", printerSettingsController.get_printers_settings);

router.get(
  "/:printerSettingsId",
  printerSettingsController.get_printer_settings_by_id
);
router.post(
  "/",
  requireAuth,
  printerSettingsController.create_printer_settings
);

router.patch(
  "/:printerId",
  requireAuth,
  printerSettingsController.change_printer_settings
);

router.delete(
  "/:printerId",
  requireAuth,
  printerSettingsController.delete_printer_settings
);

module.exports = router;
