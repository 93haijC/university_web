

module.exports = function (app,models) {

    var schoolModel = models.schoolModel;


    app.get("/api/college/:id", getschoolbyId);
    app.get("/api/mrank/:degree/:major", getmrank);
    app.get("/api/us", getusnews);
    app.post("/api/:table", batchinsert);
    app.get("/api/search/:keyword/:table", search);

    var fs = require('fs');
    var multer = require('multer');
    multiparty = require('connect-multiparty');
    multipartyMiddleware = multiparty();
    var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './uploads/');
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
        }
    });

    var upload = multer({ //multer settings
                    storage: storage
                }).single('file');

    app.post('/upload', function(req, res) {
        upload(req,res,function(err){
            if(err){
                 res.json(err);
                 return;
            }
            fs.readFile(req.file.path,'utf-8',function(err,data)
                {
                    if(err)
                    {
                        console.log(err)
                    }
                    else
                    {
                        var curjson = JSON.parse(data);
                        res.json(curjson);
                    }
                });    
        });
    });
    


  function batchinsert(req, res) {
        var data  = req.body;
        // console.log(school1); 

        console.log(data); 
        // var data1 = JSON.parse(data);
        var table = req.params.table;
    
        schoolModel
            .batchupdate(table,data)
            .then(
                function(user) {
                    res.json(user);
                },
                function(err) {
                    res.status(405).send(err);
                }
            );
    }


  function search(req, res) {
        var key = req.params.keyword;
        var table = req.params.table;
        // res.send(key)
      
        schoolModel
            .upsearch(key,table)
            .then(
                function(user) {
                    res.json(user);
                },
                function(err) {
                    res.status(405).send(err);
                }
            );
    }



    function getusnews(req, res) {
    schoolModel
        .findAll()
        .then(
            function(school) {
                res.json(school);
            },
            function(err) {
                res.status(400).send(err);
            }
        )}

//majorranking.html
    function getmrank(req, res) {
        var degree = req.params.degree;
        var major = req.params.major;
        schoolModel
         .getranks (degree,major)
         .then(
            function(ranks) {
                res.json(ranks);
            },
            function(err) {
                res.status(400).send(err);
            }
        )

    }


    // function getschoolbyId(req, res) {
    //
    //     schoolModel
    //         .findSchoolByImdbID(id)
    //         .then(
    //             function(movie) {
    //                 res.json(movie);
    //             },
    //             function(err) {
    //                 res.status(400).send(err);
    //             }
    //         )
    // }
    function getschoolbyId(req, res) {
        var id = req.params["id"];

        schoolModel
            .findSchoolById(id)
            .then(
                function(movie1) {
                    res.json(movie1);
                },
                function(err) {
                    res.status(400).send(err);
                }
            )
    }

    // function getschoolbyId(req, res) {
    //     var id = req.params["id"];
    //     res.send(school1);
    //
    // }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////


