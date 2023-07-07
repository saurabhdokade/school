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

exports.getschoolDetails = (req, res) => {
    var search = req.params;
    var where_str = "";

    if (typeof search == "object") {
        var col_names = Object.keys(search);
        col_names.forEach(function (arr) {
            if (search[arr]) {
                where_str += " and " + arr + " = '" + search[arr] + "'"
            }
        })
    }

    var sql = "SELECT * FROM `school` WHERE 1 " + where_str + " "
    console.log("SELECT", sql)
    db.query(sql, function (err, result) {
        console.log("Result", result)
        if (result != "") {
            res.status(201).json({
                result: result,
                status: 201,
                message:'school is working fine'
            });
        } else {
            res.status(404).json({
                message: 'school is not found',
                status: 404
            })
        }
    })
};
