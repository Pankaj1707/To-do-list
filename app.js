const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const items = ["to do this", "to do that ", "to do what"];
const workItems = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");



app.get("/", function(req, res)
{
   
  const day = date.getDate();
    res.render("list",{
        typeOfWork:day,
        newItems: items
    });
})

app.get("/work", function(req, res)
{
  res.render("list",{
      typeOfWork:"work",
      newItems: workItems
  })
})


app.post("/", function(req, res)
{
    const item = req.body.newItem;
    if(req.body.list === "work" )
    {
        workItems.push(item);
        res.redirect("/work")
    }
    else{
        items.push(item);
        res.redirect("/");
    
    }
});  



app.listen("3000", function(req, res)
{
    console.log("server is running at port 3000");
})






