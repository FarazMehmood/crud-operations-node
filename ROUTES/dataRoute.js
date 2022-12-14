const express = require("express");

const router = express.Router();

const getdata = require("../CONTROLLERS/dataContoller").getData;

router.get("/" , getdata);

module.exports = router;