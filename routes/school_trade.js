module.exports =function(app){
    const school = require("../model/school");
    console.log("route is working fine")

    app.post("/api/add_school",school.createschool);
}