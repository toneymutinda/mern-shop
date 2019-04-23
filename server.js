const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const passport = require("passport");

const userRoutes = require("./routes/api/users");
const shopRoutes = require("./routes/api/shops");
const feedRoutes = require("./routes/api/feeds");

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = process.env.DB;
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("DB connection established successfully"))
    .catch((err) => console.log(err));

app.use(passport.initialize());

require("./config/passport") (passport);

const apiPrefix = process.env.API_PREFIX;

// routes
app.use(`/${apiPrefix}/users`, userRoutes);
app.use(`/${apiPrefix}`, shopRoutes);
app.use(`/${apiPrefix}`, feedRoutes);

const port = process.env.PORT || 4000;

app.listen(
    port, 
    () => console.log(`Server up and running on port ${port} !!!`)
);