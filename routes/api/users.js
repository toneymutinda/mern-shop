const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require('../../config/keys');

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

const User = require('../../models/user');

router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    // check validation
    if(!isValid) {
        return res.status(400).json(errors);
    }

    // check whether user exists before persisting
    User.findOne({ email: req.body.email }).then((user) => {
        if (user) {
            return res.status(400).json({ emailexists: "Email already exists" })
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            // hash passwrod before saving to db
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then((user) => res.json({
                            success: true,
                            user: user
                        }))
                        .catch((err) => console.log(err));
                });
            }); 
        }
    });
});

router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    // check validation 
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;

    // find user by email
    User.findOne({ email }).then(user => {
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email address not found" });
        } else {
            // Check password
            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {
                    // Create JWT Payload
                    const payload = {
                        id: user.id,
                        name: user.name
                    };

                    // sign token
                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        {
                        expiresIn: 31556926 // 1 year in seconds
                        },
                        (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                        }
                    );
                } else {
                    return res
                        .status(400)
                        .json({ passwordincorrect: "Password incorrect" });
                }
            });
        }
    });
});

module.exports = router;