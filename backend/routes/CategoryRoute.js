const {
  createCategoryCtrl,
  createAllCategoryCtrl,
  deleteCategoryCtrl,
} = require("../controllers/categorycontrollers");
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");
const router = require("express").Router();
const validateObjectid = require("../middlewares/validateObjectid");
//    / api/category
router
  .route("/")
  .post(verifyTokenAndAdmin, createCategoryCtrl)
  .get(createAllCategoryCtrl);

router.route("/:id").delete(validateObjectid,verifyTokenAndAdmin, deleteCategoryCtrl);
module.exports = router;
