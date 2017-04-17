var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("portfolio test on 8000");
});

app.listen(8000, function(){
  console.log('listening on 8000!!');
});
