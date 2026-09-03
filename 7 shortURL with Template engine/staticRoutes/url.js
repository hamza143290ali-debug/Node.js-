const express = require("express");

const router = express.Router();

const {
    GenerateURL,
    RedirectFunc
} = require("../Controller/url");


router.get("/", (req, res) => {
    res.render("home");
});

router.post("/create", GenerateURL);

router.get("/:id", RedirectFunc);


module.exports = router;