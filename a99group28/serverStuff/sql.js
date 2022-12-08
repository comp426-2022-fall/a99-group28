const express = require("express")
const mysql = require("mysql")
const cors = require('cors');




//create connection
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"group28!",
});

//connect to MySQL
db.connect((err) =>{
    if(err){
        throw err;
    }
    console.log("MySQL Connected!");
});


//creates server
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


//creates the data base
app.get("/createdb", (req, res) =>{
    let sql = "CREATE DATABASE userData";

    db.query(sql, (err) =>{
        if(err){
            throw err;
        }
        res.send("Database created")
    });
});

//connects database
app.get("/", (req, res) =>{
    sql = "USE userData"
    db.query(sql, (err) =>{
        if(err){
            throw err;
        }
        res.send("Database conected")
        console.log("database running")
    });
});


//creates user table
app.get("/createtable", (req, res) =>{
    let sql = `CREATE TABLE users (
        user_id int AUTO_INCREMENT, 
        first_name VARCHAR(255), 
        last_name VARCHAR(255), 
        email VARCHAR(255), 
        password VARCHAR(255), 
        PRIMARY KEY(user_id));`

    db.query(sql, (err) =>{
        if(err){
            throw err;
        }
        res.send("User Table Created")
    });
});

//tests for post request
app.post("/posttest", (req, res) =>{
        let data = req.body;
        console.log(data);
        console.log(data.test + " Working \n");
});

//add user
app.post("/adduser", (req, res) =>{
    var data = req.body;
    const first_name = data.first_name;
    const last_name = data.last_name;
    const email = data.email;
    const password =data.password
    
    console.log(data.first_name);

    db.query("INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)",
        [first_name, last_name, email, password], 
        (err, results) =>{
            if(err){
                throw err;
            }
            res.send("User added\n");
    });
});

//update user first name
app.post("/updatefirstanme/:id", (req, res) =>{
    let data = req.body;
    let id = req.params.id;
    let first_name = data.first_name;

    let sql = 'UPDATE user SET first_name = ' + first_name + ' WHERE user_id =' + id;

    let query = db.query(sql, (err) => {
        if(err){
            throw err;
        }

        res.send("User first name update");
    });
});

//update user last name
app.post("/updatelastname/:id", (req, res) =>{
    let data = req.body;
    let id = req.params.id;
    let last_name = data.last_name;

    let sql = 'UPDATE user SET last_name = ' + last_name + ' WHERE user_id =' + id;

    let query = db.query(sql, (err) => {
        if(err){
            throw err;
        }

        res.send("User last name update");
    });
});

//update user email
app.post("/updateemail/:id", (req, res) =>{
    let data = req.body;
    let id = req.params.id;
    let last_name = data.email;

    let sql = 'UPDATE user SET email= ' + email + ' WHERE user_id =' + id;

    let query = db.query(sql, (err) => {
        if(err){
            throw err;
        }

        res.send("User email update");
    });
});

//update user password
app.post("/updatepassword/:id", (req, res) =>{
    let data = req.body;
    let id = req.params.id;
    let last_name = data.password;

    let sql = 'UPDATE user SET password= ' + password + ' WHERE user_id =' + id;

    let query = db.query(sql, (err) => {
        if(err){
            throw err;
        }

        res.send("User password update");
    });

});

//delet user
app.delete("/deleteuser/:id", (req, res) =>{
    let id = req.params.id;

    let sql = "DELETE FROM user WHERE user_id =" + id;

    let query= db.query(sql, (err) =>{
        if(err){
            throw err;
        }

        res.send("User Deleted");
    });
});

//pull all first and last names
app.get("/getnames", (req, res) =>{
    let sql = "SELECT first_name, last_name FROM users";  
    
    let query = db.query(sql, function(err, result) {
        if(err){
            throw err
        }
        res.send(result);
        console.log(result);
    });
});

//pull a user based on id
app.get("/getuser/:id", (req, res) =>{
    let sql = "SELECT * FROM users WHERE user_id =" + req.params.id;  
    
    let query = db.query(sql, function(err, results, feilds) {
        if(err){
            throw err
        }
        let data = JSON.stringify(results)
        console.log(data);
        res.send(data);
    });
});

//start the app
app.listen("3001", () =>{
    console.log("Server started on port 3001");
});


