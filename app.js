const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
var fs=require("fs");
app.listen(3333);
app.use(express.static(__dirname+'/public') );
app.get('/basketball',function(req,res)
{res.sendfile('demo.html')
});
