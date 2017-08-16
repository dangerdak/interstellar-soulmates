const fs = require("fs");

const dbConnection = require("./dbConnection");

const sql = fs.readFileSync(`${__dirname}/dbBuild.sql`).toString();

const dbBuild = (cb) => {
  dbConnection.query(sql, (err, res) => {
    if (err) throw err;
    console.log("Table has been created with result: ", res);
    if (cb) { cb(); }
  });
};

dbBuild();
module.exports = dbBuild;
