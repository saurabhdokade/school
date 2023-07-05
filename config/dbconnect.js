const mysql = require('mysql');
const config = require('./config');

exports.getdbconnection = function (){

    var mysqlconnection = mysql.createConnection({
        host: config.db.host,
        user : config.db.user,
        password: config.db.password,
        database: config.db.database,
        multiplestatements: config.db.multiplestatements,
        timezone: config.db.timezone,
        port: config.db.port
    });

    mysqlconnection.connect((err)=>{
      if(!err){
        global.db = mysqlconnection;
        console.log(`database connection etablished successfully`)
      }else{
        console.log(`connection failed` + json.stringify(err, undefined,2))
      }

    })
}
    