const express = require("express")
const mysql = require("mysql")

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
app.use(express.urlencoded({ extended: true }));

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



app.get("/createtable", (req, res) =>{
    let sql = `CREATE TABLE users (
        user_id int AUTO_INCREMENT, 
        first_name VARCHAR(255), 
        last_name VARCHAR(255), 
        email VARCHAR(255), 
        bday DATE, 
        PRIMARY KEY(user_id));`

    db.query(sql, (err) =>{
        if(err){
            throw err;
        }
        res.send("User Table Created")
    });
});

app.post("/posttest", (req, res) =>{
        let data = JSON.stringify(req.body);
        res.send(data)
        console.log(data + " Working ");
});

app.post("/adduser", (req, res) =>{
    var data = req.body;
    let post = { first_name: data.first_name, last_name: data.last_name, email: data.email, bday: data.bday};

    console.log(data.first_name);

    let sql = "INSERT INTO users SET ?";
    
    let query = db.query(sql, post, (err) =>{
        if(err){
            throw err;
        }

        res.send("User added");
    });
});

app.get("/addusertest", (req, res) =>{
    var data = req.body;
    let post = { first_name: "Dave", last_name: "Smith", email: "dav.smith@email.com", bday:'2000-1-1'};

    let sql = "INSERT INTO users SET ?";

    let query = db.query(sql, post, (err) =>{
        if(err){
            throw err;
        }

        res.send("User");
    });
});

app.get("/getnames/", (req, res) =>{
    let sql = "SELECT firs_anme FROM users";  
    
    let query = db.query(sql, function(err, results, feilds) {
        if(err){
            throw err
        }
        let data = JSON.stringify(results)
        console.log(data);
        res.send(data);
    });
});


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





app.listen("3000", () =>{
    console.log("Server started on port 3000");
});


