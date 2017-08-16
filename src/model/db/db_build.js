const fs = require("fs");

const dbConnection = require("./db_connection");

const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

const dbBuild = (cb) => {
  dbConnection.query(sql, (err, res) => {
    if (err) throw err;
    console.log("Table has been created with result: ", res);
    if (cb) { cb(); }
  });
};

dbBuild();
module.exports = dbBuild;
