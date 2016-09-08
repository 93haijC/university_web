module.exports = function() {
    var mongoose = require("mongoose");

    var MajorSchema = mongoose.Schema(
        {
            major:String,
            degree: String,
            rank:[],
         

        }, {collection: 'Major'});

    return MajorSchema;
};
