import { useState } from 'react'

import './App.css'

function App() {

const [username,setUsername]=useState("");
const [password, setPassword]=useState("");
const [status, setStatus]=useState("");


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
      alert("Login successful!");
    } else {
      alert("Invalid credentials.");
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
      alert("Account created!");
    }
  };



return(
<>
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
</>
)
  
  
}

export default App
