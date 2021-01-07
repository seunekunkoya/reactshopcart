const express = require("express");
const router = express.Router();

const cartController = require("./cartcontroller")


router.route("/").get(cartController.getCart).post(cartController.addItemToCart);
router.route("/empty-cart").delete(cartController.emptyCart);

module.exports = router;
