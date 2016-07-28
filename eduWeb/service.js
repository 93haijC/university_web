var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var usrank = [{_id:"1",rank:"1",image:"neu",name:"Princeton University"},
			  {_id:"2",rank:"2",image:"neu",name:"Havard University"},
			  {_id:"3",rank:"3",image:"neu",name:"Yale University"},
			  {_id:"4",rank:"4",image:"neu",name:"Columbia University"},
			  {_id:"5",rank:"5",image:"neu",name:"Stanford University"}
			]

app.use(express.static(__dirname));
app.get("/api/us",function(req,res)
{
	res.send(usrank);
})

app.listen(3000);