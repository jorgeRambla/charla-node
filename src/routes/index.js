const express = require('express');
const {StatusCodes} = require("http-status-codes");
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res
        .status(StatusCodes.OK)
        .send('Welcome to the API')
});

module.exports = router;
