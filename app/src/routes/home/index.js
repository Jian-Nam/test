"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")

router.get("/", ctrl.output.main);
router.get("/p1", ctrl.output.p1);
router.get("/p2", ctrl.output.p2);
router.get("/p3", ctrl.output.p3);
router.get("/works", ctrl.output.works);
router.get("/about", ctrl.output.about);

module.exports = router;