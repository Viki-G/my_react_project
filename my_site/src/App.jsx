import { useState } from 'react'

import './App.css'

function App() {

const [name,setUsername]=useState("");
const [password, setPassword]=useState("");


const handleNameChange=(event)=>{
setUsername(event.target.value)
}

const handlePasswordChange=(event)=>{
setPassword(event.target.value)
}






return(
<>
<h1>Welcome to my Site!</h1>
<h2>This site will have all the information about 3D modelling!</h2>
<h3>But first, you have to sign in!</h3>

<form className="form">
<label  for="name">Enter your username:</label>
<input  name="name" type="text"></input>
<br></br>
<label  for="pass">Enter your password:</label>
<input  name="pass" type="password"></input>
<br></br>
<br></br>

<button>Sign in</button>
<button>Sign up</button>


  
</form>
</>
)
  
  
}

export default App
