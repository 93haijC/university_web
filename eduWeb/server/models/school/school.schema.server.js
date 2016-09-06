module.exports = function() {
    var mongoose = require("mongoose");

    var SchoolSchema = mongoose.Schema(
        {
            id:String,
            school: String,
            usrank:String,
            thenrank:String,
            thewrank:String,
            qswrank:String,
            qsnrank:String,
            image: String,
            loc: String,
            web: String,
            rank: String,
            overview: String,
            applyddl: String,
            edddl: String,
            applyfee: String,
            caa: String,
            satddl: String,
            acptrate: String,
            toefl: String,
            ielts: String,
            sat: String,
            reading: String,
            math: String,
            grarate: String,
            twentyless: String,
            fiftymore: String,
            white: String,
            hispanic: String,
            asian: String,
            black: String,
            twomore: String,
            unknown: String,
            interate: String,
            gradenroll: String,
            underenroll: String,
            male: String,
            female: String,
            tuifee: String,
            roomboard: String,
            total: String,
            interaid: String,
            salary: String,
            // undermajor: [],
            // gradumajor: [],


        }, {collection: 'School'});

    return SchoolSchema;
};
