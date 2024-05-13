const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const router = express.Router();

const { isAuthUser, authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(isAuthUser, newOrder);//done

router.route("/order/:id").get(isAuthUser, getSingleOrder);//done

router.route("/orders").get(isAuthUser, myOrders);//done

router
  .route("/admin/orders")
  .get(isAuthUser, authorizeRoles("admin"), getAllOrders);//done

router
  .route("/admin/order/:id")
  .put(isAuthUser, authorizeRoles("admin"), updateOrder)//done
  .delete(isAuthUser, authorizeRoles("admin"), deleteOrder);//done
module.exports = router;
