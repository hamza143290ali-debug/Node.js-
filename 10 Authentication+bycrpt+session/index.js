const express = require("express");
const bcrypt = require("bcrypt");
const session=require('express-session'); 
const DbConnection = require("./DbConnection");
const model = require("./Model/userSchema");

const app = express();

// DB connection
DbConnection();

// Middlewares
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//session storage
app.use(
  session({
    secret: "user-hash-password@",
    resave: false,
    saveUninitialized: false,
  }),
);
//middleware for home route
const authMiddleware = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }

  next();
};

// Register page
app.get("/register", (req, res) => {
  res.render("register");
});

// Register user
app.post("/register", async (req, res) => {
  const { useremail, userpassword } = req.body;

  // Hash password
  const hashpassword = await bcrypt.hash(userpassword, 10);

  // Save user in database
  await model.create({
    useremail: useremail,
    userpassword: hashpassword,
  });

  // Go to login page
  res.redirect("/login");
});

// Home page
app.get("/",authMiddleware, (req, res) => {
  res.send(`welcome ${req.session.user}`);
});

// Login page
app.get("/login", (req, res) => {
  res.render("login", {
    message: "",
  });
});

// Login user
app.post("/login", async (req, res) => {
  const { useremail, userpassword } = req.body;

  // Find user by email
  const user = await model.findOne({ useremail });

  // User does not exist
  if (!user) {
    return res.render("login", {
      message: "Invalid email!",
    });
  }

  // Compare entered password with hashed password
  const isMatch = await bcrypt.compare(userpassword, user.userpassword);

  // Password is wrong
  if (!isMatch) {
    return res.render("login", {
      message: "Invalid password!",
    });
  }
  //login successful hone per
  req.session.user = user.useremail;

  // Login successful
  res.redirect("/");
});


//logout means agar maye ne logout kar lya to bhain sab session ko dismiss karo 
app.get('/logout',(req,res)=>{
    req.session.destroy(); 
    res.redirect('login')
})

app.listen(8002, () => {
  console.log("Server is running!");
});
