import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feed  from "../../components/feed/Feed";
import './home.css'
import { useState } from "react";
import Axios from "axios";

export default function Home(){
    const [first_name, setFName] = useState("");
    const [last_name, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPasword] = useState("");
    
    const [f_name, setCompatibility] = useState("");

    const [userList, getNames] = useState("");

    const displayInfo = () =>{
        console.log(first_name + last_name + email + password);

    }

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
    params: {fname: 'John', sname: 'Alice'},
    
    };
    
    const getPercentage = () =>{
        Axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    };
   
    

    
    return (
        <>

        <Topbar/>
         <div className="homeContainer">
            <div className="input">
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

                <label>First Name For Compatibility Test</label>
                <input type = "text"
                onChange={(event) =>{
                    setCompatibility(event.target.value);
                }}
                />

                <button onClick={adduser}>Add User</button>
                <button onClick={getPercentage}> Get Compatibility Test</button>
            
            
            </div>
            <div className="users">
                <button onClick={getUsers}>Get Compatibility</button>
               
            </div>
         
        <Sidebar/>
        <Feed/>
        <Rightbar/>
        </div>
        </>
    )
}