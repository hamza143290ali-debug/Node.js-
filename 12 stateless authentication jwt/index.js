const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser"); // 1. Import cookie-parser
const DbConnection = require("./Dbconnection");
const umodel = require("./Model/userD");

const JWT_SECRET = "mysecretkey123";

DbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // 2. Cookie parser middleware use karein
app.set("view engine", "ejs");

// 3. Updated Middleware: Cookies se token read karne ke liye
const isLoggedIn = (req, res, next) => {
  // Authorization header ki bajaye cookies se token nikal rahe hain
  const token = req.cookies.token; 

  if (!token) {
    return res.redirect("/login"); // Token nahi hai toh login page par bhejo
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.clearCookie("token"); // Invalid token clear karo
    return res.redirect("/login");
  }
};

// Home page
app.get("/", isLoggedIn, (req, res) => {
  res.send(`Welcome to home page! User ID: ${req.user.userId}`);
});

// Register routes
app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { username, useremail, userpassword } = req.body;
  const hashpassword = await bcrypt.hash(userpassword, 10);

  await umodel.create({
    username,
    useremail,
    userpassword: hashpassword,
  });

  res.render("login", { message: "Registration successful! Please login." });
});

// Login routes
app.get("/login", (req, res) => {
  res.render("login", { message: "" });
});

app.post("/login", async (req, res) => {
  const { useremail, userpassword } = req.body;

  const user = await umodel.findOne({ useremail });
  if (!user) {
    return res.render("login", { message: "User not found!" });
  }

  const match = await bcrypt.compare(userpassword, user.userpassword);
  if (!match) {
    return res.render("login", { message: "Invalid password!" });
  }

  const token = jwt.sign(
    { userId: user._id, useremail: user.useremail },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  // 4. Token ko HTTP-Only Cookie me save karke REDIRECT kar do
  res.cookie("token", token, {
    httpOnly: true, // XSS attacks se secure rehta hai
    maxAge: 3600000 // 1 hour
  });

  // Direct home page par bhej do
  res.redirect("/");
});

app.listen(8002, () => {
  console.log("Server is running at port 8002!");
});