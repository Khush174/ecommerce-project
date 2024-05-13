const express = require("express");
const {
  getAllProduct,
  getAdminProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReviews
} = require("../controllers/productController");
const { isAuthUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProduct);//done 

router
  .route("/admin/products")
  .get(isAuthUser, authorizeRoles("admin"), getAdminProducts);//done

router.route("/admin/products/new").post( isAuthUser, authorizeRoles("admin"), createProduct);//done

router.route("/admin/product/:id").put( isAuthUser, authorizeRoles("admin"), updateProduct);//done

router.route("/admin/product/:id").delete( isAuthUser, authorizeRoles("admin"), deleteProduct)//done

router.route("/product/:id").get(getProductDetails);//done

router.route("/review").put(isAuthUser, createProductReview)//done

router.route("/reviews").get(getProductReviews).delete(isAuthUser, deleteReviews)//done

module.exports = router;
