module.exports = function()
{
    var models={

        schoolModel: require("./school/school.model.server.js")()
        // movieModel: require("./major/major.model.server.js")()



    }
    return models;
};
