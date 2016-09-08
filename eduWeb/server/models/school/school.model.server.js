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
    };
    return api;

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
        SchoolModel
            .create(
                data,
                function(err, doc) {
                    if (err) {
                        deferred.reject(err);
                    } else {
                        deferred.resolve(doc);
                    }
                }
            );}  else{     

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

        if (key == "SChool"){

        SchoolModel
            .find(
                {name: key},
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