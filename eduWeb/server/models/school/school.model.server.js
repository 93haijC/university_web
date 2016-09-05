var q = require("q");

module.exports = function() {
    // load movie schema from movie model
    var movie1233= {
        id: "13",
        name: "Boston University",
        image: "image/ufl.png",
        loc: "Gainesville,FL",
        usrank:"47",
        thewrank:"27",
        thenrank:"27",
        qswrank:"27",
        qsnrank:"37",
        image: "image/neu.png",
        web: "ufl.edu",
        rank: "47",
        overview: "University of Florida is a public institution that was founded in 1853. It has a total undergraduate enrollment of 33,720, its setting is suburban, and the campus size is 2,000 acres. It utilizes a semester-based academic calendar. University of Florida's ranking in the 2016 edition of Best Colleges is National Universities, 47. Its in-state tuition and fees are $6,313 (2014-15); out-of-state tuition and fees are $28,591 (2014-15).The University of Florida is about two miles away from downtown Gainesville, a college town bolstered by the school’s nearly 50,000 students. The Florida Gators sports teams compete in the NCAA Division I Southeastern Conference, and are supported by mascots Albert and Alberta the Alligators. The Gator football team, which competes in Ben Hill Griffin Stadium — commonly called the 'The Swamp' — is particularly notorious. The team became the namesake of popular sports drink Gatorade in 1966, after freshmen Gators experimented with the novel beverage. The annual Gator Growl, held each Homecoming weekend, has been called the largest student-run pep rally in the world. About 15 percent of students are involved in the school’s 60-plus fraternities and sororities. Freshmen do not have to live on campus, though about 80 percent opt to do so. All students can partake in Gator Nights, held every Friday, which offer free late-night entertainment and a free midnight breakfast.The school has well-regarded graduate programs through the engineering school, Hough Graduate School of Business, Levin College of Law and the College of Medicine. The university is also integrated with retirement community Oak Hammock, where students can work, complete internships in health sciences and find mentors. Famous graduates of the University of Florida include home repair television sensation Bob Vila, Heisman Trophy winner Steve Spurrier and former U.S. Sens. Bob Graham and Connie Mack.",
        applyddl: "November 1",
        edddl: "N/A",
        applyfee: "$30",
        caa: "No",
        satddl: "December 31",
        acptrate: "47%",
        toefl: "80",
        ielts: "6",
        sat: "1780-2040",
        reading: "570-670",
        math: "590-690",
        writing: "590-680",
        grarate: "86%",
        twentyless: "49.1%",
        fiftymore: "16.1%",
        white: "58%",
        hispanic: "19%",
        asian: "8%",
        black: "7%",
        twomore: "3%",
        unknown: "3%",
        interate: "1.73%",
        gradenroll: "16630",
        underenroll: "33720",
        male: "45%",
        female: "55%",
        tuifee: "$34904",
        roomboard: "$9630",
        total: "$44534",
        interaid: "Yes",
        salary: "$5130",
        undermajor: [{
            depart: "Science/Math:", major: [{major: "Animal Science", rank: ""}, {major: "Astronomy", rank: ""},
                {major: "Chemistry", rank: "35"}]
        }, {
            depart: "Science/Math:", major: [{major: "Animal Science", rank: ""}, {major: "Astronomy", rank: ""},
                {major: "Chemistry", rank: "35"}]
        }],
        gradumajor: [{
            depart: "Business School", major: ["Master of Accounting",
                "Master of International Business"]
        }, {
            depart: "Business School", major: ["Master of Accounting",
                "Master of International Business"]
        }]
    };

    var movie1232= {
        id: "13",
        name: "tufts University",
        image: "image/ufl.png",
        loc: "Gainesville,FL",
        usrank:"47",
        thewrank:"27",
        thenrank:"27",
        qswrank:"27",
        qsnrank:"37",
        image: "image/neu.png",
        web: "ufl.edu",
        rank: "47",
        overview: "University of Florida is a public institution that was founded in 1853. It has a total undergraduate enrollment of 33,720, its setting is suburban, and the campus size is 2,000 acres. It utilizes a semester-based academic calendar. University of Florida's ranking in the 2016 edition of Best Colleges is National Universities, 47. Its in-state tuition and fees are $6,313 (2014-15); out-of-state tuition and fees are $28,591 (2014-15).The University of Florida is about two miles away from downtown Gainesville, a college town bolstered by the school’s nearly 50,000 students. The Florida Gators sports teams compete in the NCAA Division I Southeastern Conference, and are supported by mascots Albert and Alberta the Alligators. The Gator football team, which competes in Ben Hill Griffin Stadium — commonly called the 'The Swamp' — is particularly notorious. The team became the namesake of popular sports drink Gatorade in 1966, after freshmen Gators experimented with the novel beverage. The annual Gator Growl, held each Homecoming weekend, has been called the largest student-run pep rally in the world. About 15 percent of students are involved in the school’s 60-plus fraternities and sororities. Freshmen do not have to live on campus, though about 80 percent opt to do so. All students can partake in Gator Nights, held every Friday, which offer free late-night entertainment and a free midnight breakfast.The school has well-regarded graduate programs through the engineering school, Hough Graduate School of Business, Levin College of Law and the College of Medicine. The university is also integrated with retirement community Oak Hammock, where students can work, complete internships in health sciences and find mentors. Famous graduates of the University of Florida include home repair television sensation Bob Vila, Heisman Trophy winner Steve Spurrier and former U.S. Sens. Bob Graham and Connie Mack.",
        applyddl: "November 1",
        edddl: "N/A",
        applyfee: "$30",
        caa: "No",
        satddl: "December 31",
        acptrate: "47%",
        toefl: "80",
        ielts: "6",
        sat: "1780-2040",
        reading: "570-670",
        math: "590-690",
        writing: "590-680",
        grarate: "86%",
        twentyless: "49.1%",
        fiftymore: "16.1%",
        white: "58%",
        hispanic: "19%",
        asian: "8%",
        black: "7%",
        twomore: "3%",
        unknown: "3%",
        interate: "1.73%",
        gradenroll: "16630",
        underenroll: "33720",
        male: "45%",
        female: "55%",
        tuifee: "$34904",
        roomboard: "$9630",
        total: "$44534",
        interaid: "Yes",
        salary: "$5130",
        undermajor: [{
            depart: "Science/Math:", major: [{major: "Animal Science", rank: ""}, {major: "Astronomy", rank: ""},
                {major: "Chemistry", rank: "35"}]
        }, {
            depart: "Science/Math:", major: [{major: "Animal Science", rank: ""}, {major: "Astronomy", rank: ""},
                {major: "Chemistry", rank: "35"}]
        }],
        gradumajor: [{
            depart: "Business School", major: ["Master of Accounting",
                "Master of International Business"]
        }, {
            depart: "Business School", major: ["Master of Accounting",
                "Master of International Business"]
        }]
    };
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