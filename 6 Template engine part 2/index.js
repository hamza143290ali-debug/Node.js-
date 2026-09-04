import express from "express";

const app = express();
//middleware for json file
app.use(express.json());
//middleware for urlencoded data
app.use(express.urlencoded({ extended: false }));

//middleware for static files
app.use(express.static("public")); 


app.set("view engine", "ejs");

app.get("/form", async (req, res) => {
    res.render("form",{message:null});
});

app.post("/form", async (req, res) => {
 const data=req.body.myname; 
const message=`Hello ${data} you submitted the form.`;
 res.render('form',{message:message}); 

});

app.listen(5000, () => {
    console.log("server is running on port 5000");
});