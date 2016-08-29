module.exports = function(app) {

    var models = require("./models/models.server")();
    require("./services/school.service.server.js")(app, models);



};
