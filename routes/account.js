const express = require("express"); ;
 const { authenticateToken } =require ("./../middleware/authMiddleware.js");
 const {
  registerValidations,
  loginValidations,
} =require ("../middleware/validations.js");
 const {
  register,
  login,
  getUser,
  updateProfilePicture,
} =require ("../controllers/account.js"); 


const router = express.Router();


router.post("/register", [...registerValidations], register);
router.post("/login", [...loginValidations], login);
router.get("/", authenticateToken, getUser);
router.put("/image", authenticateToken, updateProfilePicture);

module.exports=router;
