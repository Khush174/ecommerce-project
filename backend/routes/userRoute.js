const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  forgetPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUser ,
  getSingleUser,
  updateUserRole,
  deleteUserRole
} = require("../controllers/userController");
const { isAuthUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(registerUser);//done

router.route("/login").post(loginUser);//done

router.route("/password/forgot").post(forgetPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logoutUser);//done

router.route("/me").get(isAuthUser, getUserDetails);//done

router.route("/password/update").put(isAuthUser, updatePassword);//done

router.route("/me/update").put(isAuthUser, updateProfile);//done

router
  .route("/admin/users")
  .get(isAuthUser, authorizeRoles("admin"), getAllUser);//done

router
  .route("/admin/user/:id")
  .get(isAuthUser, authorizeRoles("admin"), getSingleUser).put(isAuthUser, authorizeRoles("admin"), updateUserRole).delete(isAuthUser, authorizeRoles("admin"), deleteUserRole);

module.exports = router;
