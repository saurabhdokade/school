module.exports =function(app){
    const school = require("../model/school");
    console.log("route is working fine")

    app.post("/api/add_school",school.createschool);
    app.get("/api/get_school",school.getAllschool);
    app.get("/api/get_school/:id", school.getschoolDetails);
    app.delete("/api/school/:id", school.deleteschool);
    app.put("/api/school/:id", school.updateschool);
}