import express from "express";
import { body, validationResult } from "express-validator";

const app = express();

// View Engine
app.set("view engine", "ejs");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Validation Rules
const registerValidation = [
    body("username")
        .trim()
        .notEmpty()
        .withMessage("Name is required"),

    body("useremail")
        .isEmail()
        .withMessage("Invalid email")
        .normalizeEmail(),

    body("userpassword")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters")
        .isStrongPassword()
        .withMessage("Password must be strong"),

    body("city")
        .isIn(["Mingora", "Kanju", "Koza Bandai"])
        .withMessage("Invalid city")
];

// GET Route
app.get("/", (req, res) => {
    res.render("form", {
        errors: []
    });
});

// POST Route
app.post(
    "/register",
    registerValidation,
    (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render("form", {
                errors: errors.array()
            });
        }

        res.send("Registration successful");
    }
);

// Server
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});