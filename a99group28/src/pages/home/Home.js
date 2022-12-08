
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
        });
    };

    
    return (
        <>

        <Topbar/>
         <div className="homeContainer">

            <Sidebar/>

            <div className="input">


                <div className="register">Register</div>
                
                  <input placeholder="First Name"
                  onChange={(event) => {
                    setFName(event.target.value);
                  }}
                />

                
                <input placeholder="Last Name"  
                onChange={(event) => {
                    setLName(event.target.value);
                  }}
                />

                
                <input placeholder="Emaiil"
                onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />

                
                <input placeholder="Password"
                onChange={(event) => {
                    setPasword(event.target.value);
                  }}
                />

                <button onClick={adduser}>Add User</button>

                <div className="users">
                <button onClick={getUsers}> Get User Names</button>
                {userList.map((val, key) => {
                    return <div>{val.first_name}</div>
                })}
                </div>

               

                <div className="nameInputWrapper">

                    <div className="nameDesc">Enter two names to see their romantic compatibility!</div>
                

                    <input placeholder="Name 1" 
                /*onChange={(event) => {
                    setName1(event.target.value);
                  }}*/
                    />
                    <input placeholder="Name 2" 
                /*onChange={(event) => {
                    setName2(event.target.value);
                  }}*/
                    />

                    <button className="initializer">See Compatibility!</button>
                
                </div>

            </div>

            <div className="rightbar">
                   
                    <a target="_blank" href="https://open.spotify.com/playlist/20G3iX5YlzZevRUIfq4FR1?si=7d37d72d2dde4c3c"><img src="./assets/people/Spotify-logo.png" className="spotify"></img></a>
                    <div className="descSpotify">
                        <div> Check out the official </div>
                        <div>Nomenconnect Spotify!</div>
                    </div>
             </div>
         
        
    
        </div>
        </>
    )
}