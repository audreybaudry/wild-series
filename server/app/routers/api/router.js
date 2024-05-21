const express = require("express");

const router = express.Router();

const { sayWelcome } = require("../../controllers/sayActions");

router.get("/", sayWelcome);

/* ************************************************************************* */
// Import And Use Routers Here

const browseRouter = require("./programs/router");

router.use("/programs", browseRouter);

/* ************************************************************************* */

const categoryRouter = require("./categories/router");

router.use("/categories", categoryRouter);

/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

/* ************************************************************************* */

module.exports = router;
