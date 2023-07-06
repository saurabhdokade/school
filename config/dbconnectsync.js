var Mysql = require('sync-mysql');
const config = require('./config');

exports.getsyncDbConnection = function (){
    var connection = new Mysql({
        host: config.db.host,
        user: config.db.user,
        password: config.db.password,
        database: config.db.database,
        timezone: config.db.timezone,
        port: config.db.port
    });
    return connection;
}