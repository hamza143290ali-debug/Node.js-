const model = require("../MODEL/Urlmodel");
const { nanoid } = require("nanoid");

// logic to insert URL in DB
async function GenerateURL(req, res) {
    try {
        if (!req.body.url) {
            return res.status(400).json({
                message: "url is required"
            });
        }

        const shortId = nanoid(8);

        await model.create({
            shortId: shortId,
            originalUrl: req.body.url
        });

        console.log("Data pushed into DB");

    return res.render("home", {
    shortID: shortId
});

    } catch (err) {
        console.log("Something wrong in GenerateURL", err);
    }
}

// logic for redirect URL
async function RedirectFunc(req, res) {
    try {
        const urlIdFromResponse = req.params.id;

        const url = await model.findOne({
            shortId: urlIdFromResponse
        });

        if (!url) {
            return res.status(404).json({
                message: "url not found"
            });
        }

        return res.redirect(url.originalUrl);

    } catch (err) {
        return res.status(500).json({
            message: "something wrong in redirect section"
        });
    }
}

module.exports = { GenerateURL, RedirectFunc };