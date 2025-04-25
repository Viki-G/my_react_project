import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Home from './Home.jsx'

function LogForm({ onLogin })
{

    const [username,setUsername]=useState("");
    const [password, setPassword]=useState("");
    const [status, setStatus]=useState("");
    const navigate = useNavigate();
    const [logIn,setIsLoggedIn]=useState(false);
    
    
    
    const handleNameChange=(event)=>{
    setUsername(event.target.value)
    }
    
    const handlePasswordChange=(event)=>{
    setPassword(event.target.value)
    }
    
    const handleSignIn = async () => {
        const res = await fetch(`http://localhost:3001/users?username=${username}`);
        const data = await res.json();
      
        if (data.length > 0) {
          console.log("Login successful!");
          onLogin();
          navigate('/home');
          
          
          
        } else {
          console.log("Invalid credentials.");
        }
      };
    
      const handleSignUp = async () => {
        const res = await fetch(`http://localhost:3001/users?username=${username}`);
        const data = await res.json();
      
        if (data.length > 0) {
          alert("User already exists!");
        } else {
          const newUser = { username, password };
          await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
          });
          console.log("Account created!");
        }
      };
    
    
    
    return(
    <>
    <div id="mainForm">
    <h1>Welcome to my Site!</h1>
    <h2>This site will have all the information about 3D modelling!</h2>
    <h3>But first, you have to sign in!</h3>
    
    <form className="form" >
    <label  for="name">Enter your username:</label>
    <input  name="name" type="text" value={username} onChange={handleNameChange}></input>
    <br></br>
    <label  for="pass">Enter your password:</label>
    <input  name="pass" type="password" value={password} onChange={handlePasswordChange}></input>
    <br></br>
    <br></br>
    
    <button type="button" onClick={handleSignIn}>Sign in</button>
    <button type="button" onClick={handleSignUp}>Sign up</button>
    
    
      
    </form>
    </div>






    </>





    )

}

export default LogForm;