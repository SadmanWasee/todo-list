const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = 80;

app.set("view engine", "ejs");

app.get('/', (req, res) => {

    let today = new Date();
    let currentday = today.getDay(); 
    let day = "";

    if(currentday == 0)
    {
        
        day = "Sunday";
        
    }
    else if(currentday == 1){
        
        day = "Monday";
    }
    else if(currentday == 2){
        
        day = "Tuesday";
    }
    else if(currentday == 3){
       
        day = "Wednesday";
    }
    else if(currentday == 4){
       
        day = "Thursday";
    }
    else if(currentday == 5){
       
        day = "Friday";
    }
    else{
        
        day = "Saturday";
    }
    res.render("list", {kindofday: day});
  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});