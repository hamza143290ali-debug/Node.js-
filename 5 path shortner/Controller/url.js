const { nanoid } = require("nanoid");
const URL = require("../Model/UrlSchema");

// Handle POST request
async function GenerateShortUrl(req, res) {
    if (!req.body.url) {
        return res.status(400).send({ message: "Enter url" });
    }

    const shortId = nanoid(8);

    await URL.create({
        shortId: shortId,
        originalUrl: req.body.url
    });

    return res.render("home", {
        redirectUrl: `http://localhost:8002/${shortId}`
    });
}

// Redirect to original URL
async function RedirecUrl(req, res) {
    const userId = req.params.id;

    const user = await URL.findOne({
        shortId: userId
    });

    if (!user) {
        return res.status(404).send("Short URL not found");
    }

    return res.redirect(user.originalUrl);
}

module.exports = {
    GenerateShortUrl,
    RedirecUrl
};