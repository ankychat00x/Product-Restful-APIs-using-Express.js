var dbprops = require("./db_properties");
var mysql = require("mysql");


module.exports ={
getConnection : ()=>{

    return mysql.createConnection({
        host: dbprops.host,
        user: dbprops.user,
        password: dbprops.password,
        database: dbprops.dbName
    });
}
}
