var q = require("q");

module.exports = function() {


    var mongoose = require("mongoose");
    var SchoolSchema = require("./school.schema.server.js")();
    var MajorSchema = require("./major.schema.server.js")();
    //var SchoolSchema = require("./school.schema.server.js")(mongoose);


    // create movie from schema
    var SchoolModel  = mongoose.model("School", SchoolSchema);
    var MajorModel = mongoose.model("major",MajorSchema);   

    var mrank = {major:"Engineering",degree:"Undergraduate",rank:["Princeton University","Havard University", "Massachusetts Institute of Technology"]}
    var api = {
        findSchoolById: findSchoolById,
        findAll: findAll,
        batchupdate: batchupdate,
        upsearch:upsearch,
        getranks: getranks,
        deletecollection: deletecollection,
    };
    return api;




      function deletecollection(did) {
        return SchoolModel.remove({id: did});
    }

        function findAll() {
        var deferred = q.defer();

        SchoolModel
            .find(
                {},
                function(err, doc) {
                    if (err) {
                        deferred.reject(err);
                    } else {
                        deferred.resolve(doc);
                    }
                }
            );

        return deferred.promise;
    }



    function getranks(degree,major) {
        var deferred = q.defer();

        MajorModel
            // .create(mrank,
            .find({major:major,degree:degree},
                function(err, doc) {
                    if (err) {
                        deferred.reject(err);
                    } else {
                        deferred.resolve(doc);
                    }
                }
            );

        return deferred.promise;
    }


    function batchupdate(table,data) {
        var deferred = q.defer();

        if (table == "School"){

        for (var i=0 ; i< data.length; i++)
        {
         var eid = data[i]["id"]; 
          console.log(eid);
          // console.log(data[3]);

         SchoolModel
               .update({id: eid}, data[i], {upsert: true},
                function(err, doc) {
                    if (err) {
                        deferred.reject(err);
                    } else {
                        deferred.resolve(doc);
                    }
                }
            );} }

     //      SchoolModel
     //       // .findOne(
     //       //      {imdbID: data[i].id},
     //       //      function(err, doc) {
     //       //          if (err) {
     //       //              .creat(data[i])
     //       //                                  }
     //       //          if (doc) {
                         
     // .create(
     //            data[i],


     //            function(err, doc) {
     //                if (err) {
     //                    deferred.reject(err);
     //                } else {
     //                    deferred.resolve(doc);
     //                }
     //            }
     //        );} }
                                       
        //      .create(
        //         data,
        //         function(err, doc) {
        //             if (err) {
        //                 deferred.reject(err);
        //             } else {
        //                 deferred.resolve(doc);
        //             }
        //         }
            // );}  else{     
                else{

        MajorModel
            .create(
                data,
                function(err, doc) {
                    if (err) {
                        deferred.reject(err);
                    } else {
                        deferred.resolve(doc);
                    }
                } );}

        return deferred.promise;
    }


    function upsearch(key,table) {
        var deferred = q.defer();

        if (table == "School"){

        SchoolModel
            .find(
                {school: key},
                function(err, doc) {
                    if (err) {
                        deferred.reject(err);
                    } else {
                        deferred.resolve(doc);
                    }
                }
            );}
            else{

        MajorModel
            .find(
                {major: key},
                function(err, doc) {
                    if (err) {
                        deferred.reject(err);
                    } else {
                        deferred.resolve(doc);
                    }
                }
            );
            }

        return deferred.promise;
    }



    function findSchoolById(id) {
        var deferred = q.defer();

        SchoolModel
            // .create(
            //     movie1232,
            //     function(err, doc) {
            //         if (err) {
            //             deferred.reject(err);
            //         } else {
            //             deferred.resolve(doc);
            //         }
            //     }
            // );
            .findOne(
                {id: id},
                function(err, doc) {
                    if (err) {
                        deferred.reject(err);
                    } else {
                        deferred.resolve(doc);
                    }
                }
            );

        return deferred.promise;
    }



};