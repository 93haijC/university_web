var q = require("q");

module.exports = function() {


    var mongoose = require("mongoose");
    var SchoolSchema = require("./school.schema.server.js")();
    //var SchoolSchema = require("./school.schema.server.js")(mongoose);


    // create movie from schema
    var SchoolModel  = mongoose.model("School", SchoolSchema);

    var api = {
        findSchoolById: findSchoolById,
        findAll: findAll,
        batchupdate: batchupdate,
        upsearch:upsearch,
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






    function batchupdate(data) {
        var deferred = q.defer();

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
            );

        return deferred.promise;
    }


    function upsearch(key) {
        var deferred = q.defer();

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
            );

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