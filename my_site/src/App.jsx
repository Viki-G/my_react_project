import { useState } from 'react'

import './App.css'

function App() {

const [name,setUsername]=useState("");
const [password, setPassword]=useState("");
const [status, setStatus]=useState("");


const handleNameChange=(event)=>{
setUsername(event.target.value)
}

const handlePasswordChange=(event)=>{
setPassword(event.target.value)
}

const handleSubmit=(event,actionType)=>{


}




return(
<>
<h1>Welcome to my Site!</h1>
<h2>This site will have all the information about 3D modelling!</h2>
<h3>But first, you have to sign in!</h3>

<form className="form" >
<label  for="name">Enter your username:</label>
<input  name="name" type="text" value={name} onChange={handleNameChange}></input>
<br></br>
<label  for="pass">Enter your password:</label>
<input  name="pass" type="password" value={password} onChange={handlePasswordChange}></input>
<br></br>
<br></br>

<button type="button" onClick={(event)=>handleSubmit(event,"signIn")}>Sign in</button>
<button type="button" onClick={(event)=>handleSubmit(event,"signUp")}>Sign up</button>


  
</form>
</>
)
  
  
}

export default App
