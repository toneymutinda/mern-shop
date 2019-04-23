const express = require("express");
const router = express.Router();

const validateShopInput = require("../../validation/shopvalidation");
const validateFeedInput = require("../../validation/feedvalidation");
const validateProductInput = require("../../validation/productvalidation");

const Shop = require('../../models/shop');
const Feed = require('../../models/feed');
const Product = require('../../models/product');

router.post("/shop", (req, res) => {
    const { errors, isValid } = validateShopInput(req.body);

    // check validation
    if(!isValid) {
        return res.status(400).json(errors);
    }

    // check whether shop exists before persisting
    Shop.findOne({ store_name: req.body.store_name }).then((shop) => {
        if (shop) {
            return res.status(400).json({ shopexists: "Store with that name already exists" })
        } else {
            const newShop = new Shop({
                store_name: req.body.store_name,
                store_url: req.body.store_url,
                currency: req.body.currency
            });

            // persist shop to data
            newShop
                .save()
                .then((shop) => res.json({
                    success: true,
                    shop: shop
                }))
                .catch((err) => console.log(err));
        }
    });
});

router.post("/shop/:id/feed", (req, res) => {
    const { errors, isValid } = validateFeedInput(req.body);

    // check validation
    if(!isValid) {
        return res.status(400).json(errors);
    }
});

router.get("/shops", (req, res) => {
    Shop.find({}).then((shops) => {
        res.json({
            success: true,
            shops: shops
        })
        .catch((err) => console.log(err));
    });
});

router.post("/shop/:id/product", (req, res) => {
    const { errors, isValid } = validateProductInput(req.body);

    // check validation
    if(!isValid) {
        return res.status(400).json(errors);
    }
});

module.exports = router;