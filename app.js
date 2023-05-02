const express = require('express');
const bodyparser = require('body-parser'); // used to parse through the body our webpage
const app = express(); //creating an express app
const port = 80; // assigning the port

app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended: true})) // using the bodyparser
app.use(express.static("public")) //express only serves the root folder and views folder so we need to create a separate public folder to serve our css. And for that we need to serve our public folder through app.js using this piece of code.

let items = [];
items = ["Buying food", "Cooking food", "Eating food"];
app.get('/', (req, res) => {

    let today = new Date();
    let currentday = today.getDay(); 
    let options = {
        weekday : "long",
        day : "numeric",
        month: "long",
        year: "numeric"
    };

    let day = today.toLocaleDateString("en-US", options);

    
    res.render("list", { kindofday: day, items: items});
  
});

app.post('/', (req,res)=>{

    let  item  = req.body.newItem 
    items.push(item);

    res.redirect('/');

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});