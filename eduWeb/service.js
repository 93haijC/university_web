var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var rank = {usrank:[{_id:"1",rank:"1",image:"image/neu.png",name:"Princeton University"},
			  {_id:"2",rank:"2",image:"image/neu.png",name:"Havard University"},
			  {_id:"3",rank:"3",image:"image/neu.png",name:"Yale University"},
			  {_id:"4",rank:"4",image:"image/neu.png",name:"Columbia University"},
			  {_id:"5",rank:"5",image:"image/neu.png",name:"Stanford University"}
			],therank:[{_id:"1",nrank:"1",wrank:"1",image:"image/neu.png",name:"Princeton University"},
			  {_id:"2",nrank:"1",wrank:"2",image:"image/neu.png",name:"Havard University"},
			  {_id:"3",nrank:"1",wrank:"3",image:"image/neu.png",name:"Yale University"},
			  {_id:"4",nrank:"1",wrank:"4",image:"image/neu.png",name:"Columbia University"},
			  {_id:"5",nrank:"1",wrank:"5",image:"image/neu.png",name:"Stanford University"}
			],qsrank:[{_id:"1",nrank:"1",wrank:"1",image:"image/neu.png",name:"Princeton University"},
			  {_id:"2",nrank:"1",wrank:"2",image:"image/neu.png",name:"Havard University"},
			  {_id:"3",nrank:"1",wrank:"3",image:"image/neu.png",name:"Yale University"},
			  {_id:"4",nrank:"1",wrank:"4",image:"image/neu.png",name:"Columbia University"},
			  {_id:"5",nrank:"1",wrank:"5",image:"image/neu.png",name:"Stanford University"}
			]}
var mrank = {major:"Engineering",degree:"Undergraduate",rank:["Princeton University","Havard University",
"Massachusetts Institute of Technology"]}



app.use(express.static(__dirname));
app.get("/api/us",function(req,res)
{
	res.send(rank);
})

app.get("/api/mrank",function(req,res)
{
	var degree = req.query.degree;
	var major  = req.query.major;
	res.send(mrank);
})

app.listen(3000);