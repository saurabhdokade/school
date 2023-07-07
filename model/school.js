var dbconnectsync = require('../config/dbconnectsync')
var connection = dbconnectsync.getsyncDbConnection()


exports.createschool  = (req,res) => {
console.log("model is working fine");
    res.send({
        message:"model is working fine"

    })
};

exports.getAllschool = (req, res) => {
   console.log("model is working successfully")
    res.send({
        message:"model is working successfully"
    })
};

