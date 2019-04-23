const express = require("express");
const router = express.Router();

const validateFeedInput = require("../../validation/feedvalidation");

const Feed = require('../../models/feed');

router.get("/feeds", (req, res) => {
    Feed.find({}).then((feeds) => {
        res.json({
            success: true,
            feeds: feeds
        })
        .catch((err) => console.log(err));
    });
});

module.exports = router;