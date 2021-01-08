const express = require("express");
const router = express.Router();
const multerInstance = require("../util/multer")

const {
  getProduct,
  addProduct,
  removeProduct,
  getProductById,
} = require("../controllers/product");

router.route("/").get(getProduct).post(multerInstance.upload.single('image'), addProduct);
router.route("/:id").get(getProductById).delete(removeProduct);

module.exports = router;