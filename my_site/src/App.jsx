import { useState } from 'react'
import { Routes, Route, Navigate,Router, BrowserRouter,Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LogForm from './LogForm.jsx'
import Home from './Home.jsx'
import Navbar from './Navbar.jsx';
import History from './History.jsx';
import Animation from './Animation.jsx';
import Process from './Process.jsx';


import './App.css'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  
return(
  <>
  
    <div>
      {isLoggedIn}
        
      
        
        <Routes>
           <Route path="/home" element={<Home/>}></Route>
           <Route path="/" element={<LogForm onLogin={handleLogin}/>}></Route>
           <Route path="/history" element={<History/>}></Route>
           <Route path="/animation" element={<Animation/>}></Route>
           <Route path="/process" element={<Process/>}></Route>

        </Routes>
          
    
        
      
    </div>
</>
)







  
 //i have to do the form in a different component 
}

export default App
