const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = 80;

app.get('/', (req, res) => {

    let today = new Date();


    if(today.getDay() == 5)
    {
        res.write('<h1>It is weekend</h1>')
        res.write('<p>Hello world</p>')

        res.send();
    }
    else{
        // 
        res.sendFile(__dirname+"/index.html");
    }

  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});