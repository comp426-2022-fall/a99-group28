import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

import './home.css'
import { useState } from "react";
import Axios from "axios";

export default function Home(){
    const [first_name, setFName] = useState("");
    const [last_name, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPasword] = useState("");
    
    //holds name for compatibility comparison
    var [f_name, setCompatibility1] = useState("");
    var [s_name, setCompatibility2] = useState("");
    var second_name = 'alice';
    var [percentage, setPercetage] = useState("");
    
    const [userList, getNames] = useState("");



    const adduser = () =>{
        Axios.post('http://localhost:3001/adduser', {
            first_name: first_name, 
            last_name: last_name, 
            email: email, 
            password: password,
        }).then(() =>{
            console.log("User added");
        });
    };

    const getUsers = () =>{
        Axios.get('http://localhost:3001/getnames').then((response) => {
            getNames(response.data);
            console.log("Users Fecthed")
        });
    };

    const options = {
    method: 'GET',
    url: 'https://love-calculator.p.rapidapi.com/getPercentage',
    params: {fname: f_name, sname: second_name},
    headers: {
        'X-RapidAPI-Key': '703558ec3bmshef7ac65c502cce8p1f3ac8jsn349957f27b6d',
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
      }
    
    };
    
    function getPercentage(){
        Axios.request(options).then(function (response) {
            setPercetage(response.data.percentage); 
            console.log("api: " + percentage);
        }).catch(function (error) {
            console.error(error);
        });
        
    };

    return (
        <>

        <Topbar/>
         <div className="homeContainer">
            <div className="input">
                <div className="register">Register</div>
                <label>First Name:</label>
                  <input type="text" 
                  onChange={(event) => {
                    setFName(event.target.value);
                  }}
                />

                <label>Last Name:</label>
                <input type="text"  
                onChange={(event) => {
                    setLName(event.target.value);
                  }}
                />

                <label>email:</label>
                <input type="text" 
                onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />

                <label>password:</label>
                <input type="text" 
                onChange={(event) => {
                    setPasword(event.target.value);
                  }}
                />
                <div className="feilds">
                <label>First Name For Compatibility Test</label>
                <input type = "text"
                onChange={(event) =>{
                    setCompatibility1(event.target.value);
                }}
                />


                <label>Second Name For Compatibility Test</label>
                <input type = "text"
                onChange={(event) =>{
                    setCompatibility2(event.target.value);
                }}
                />  
                
                <button onClick={getPercentage}>Get Compatibility</button>
                <div className="percent">{percentage}%</div>

                </div>
            
            </div>
        
            <div className="users">
                
                
                <button onClick={adduser}>Add User</button>

                <button onClick={getUsers}>Get all Users</button>
                {userList.map((val, key) =>{

                var output;
                second_name = val.first_name;
                output = val.first_name + " " + val.last_name;
                return<div>{output}</div>   
                })}
            </div>
         
        </div>
        </>
    )
}