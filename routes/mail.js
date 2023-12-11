const express = require("express");
const router = express.Router();
const { authenticateToken } = require("./../middleware/authMiddleware.js");
const { emailValidations } = require("../middleware/validations.js");
const {
  getAllEmails,
  sendEmail,
  saveDraftEmails,
   updateDraft,
   moveEmailsToBin,
  removeFromTrash,
   toggleEmailProperty,
   deleteEmail,
} = require("../controllers/mailController.js");


router.get("/get", authenticateToken, getAllEmails);
router.post("/send", authenticateToken, [...emailValidations], sendEmail);
router.post("/draft", authenticateToken, saveDraftEmails);
router.put("/draft/:id", authenticateToken, updateDraft);
router.put("/:id/trash", authenticateToken, moveEmailsToBin);
 router.put("/:id/untrash", authenticateToken, removeFromTrash);
 router.put("/:id/:toggle", authenticateToken, toggleEmailProperty);
 router.delete("/:id", authenticateToken, deleteEmail);
module.exports = router;
