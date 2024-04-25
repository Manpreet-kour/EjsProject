import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("mainpage.ejs");
});

app.get("/aimlpage",(req,res)=>{
    res.render("aimlpage.ejs");
})
app.get("/gen",(req,res)=>{
    res.render("gen.ejs");
})
app.get("/faq",(req,res)=>{
    res.render("faq.ejs");
})

app.listen(port,()=>{
    console.log(`server live at ${port}.`);
})