const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const {
  categoryActions,
  categoriesId,
} = require("../../../controllers/categoryActions");

router.get("/", categoryActions);

router.get("/:id", categoriesId);

/* ************************************************************************* */

module.exports = router;
