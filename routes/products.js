const express = require("express");
const router = express.Router();

const {
    getAllProducts, getAllProductsTesting,} =
    require("../controllers/products");   // import controller file  

router.route("/").get(getAllProducts);  // it show what to show on home screen
router.route("/testing").get(getAllProductsTesting);  // it will be tested on postman

module.exports = router;    // to export 