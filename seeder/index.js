const mysql = require('mysql2');
const fs = require("fs");
const bcrypt = require("bcryptjs")

console.log("called")

require("dotenv").config()

const seedQuery = fs.readFileSync("./db/seed.sql",{
    encoding: "utf-8",
})

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "vidhi",
    port: 3306,
    database: "agile_practical_db",
})

connection.connect();

connection.query(seedQuery,[],err=>{
    if(err)
        throw err;

    console.log("seed completed")

    connection.end();
})
