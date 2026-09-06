import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use(
    session({
        secret: "secretpassword",
        resave: false,
        saveUninitialized: false,

        cookie: {
            maxAge: 1000 * 60 * 60 * 24
        },

        store: MongoStore.create({
            mongoUrl: "mongodb://127.0.0.1:27017/sessiondb"
        })
    })
);

app.get("/", (req, res) => {
    res.render("form", {
        message: ""
    });
});

app.post("/login", (req, res) => {
    const { username, userpassword } = req.body;

    req.session.username = username;

    res.render("form", {
        message: `You logged in ${username}`
    });
});

app.get("/about", (req, res) => {

    if (req.session.username) {
        res.send(
            `<h1>Username from session is: ${req.session.username}</h1>`
        );
    } else {
        res.send("No username found in session");
    }

});

app.get("/logout", (req, res) => {

    req.session.destroy((err) => {

        if (err) {
            return res.status(500).send("Failed to destroy session");
        }

        res.send("<h1>Session destroyed successfully.</h1>");
    });

});

app.listen(8000, () => {
    console.log("Server is running at port 8000");
});