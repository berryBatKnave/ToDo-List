import express from "express";
import bodyParser from "body-parser";
var arr = [];

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  arr = [];
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  var v = req.body["list-value"];
  if(v===""){
    console.log("Nothing To Add!");
  }
  else{
    arr.push(v);
    res.render("index.ejs", { listArray: arr });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});