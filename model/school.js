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

exports.deleteschool = (req, res) => {
    var school_id = req.params.id;

    var result1 = connection.query("SELECT id FROM school WHERE id = " + school_id + " ");
    console.log(result1)
    if (result1 != "") {
        var sql = "DELETE FROM school WHERE `id` = " +school_id + " "

        db.query(sql, function (err, result) {

            if (!err) {
                res.status(200).json({
                    message: 'school deleted successfully'
                });
            }
        })
    } else {
        res.status(405).json({
            message: 'school  not found',
            status: 405
        });
    }

};
