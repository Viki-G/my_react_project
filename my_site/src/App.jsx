import { useState } from 'react'
import { Routes, Route, Navigate,Router, BrowserRouter,Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LogForm from './LogForm.jsx'
import Home from './Home.jsx'
import Navbar from './Navbar.jsx';
import History from './History.jsx';


import './App.css'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
return(
  <>
  
    <div>
      {!isLoggedIn ? (
        <LogForm onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <>
        <Routes>
           <Route path="/home" element={<Home/>}></Route>
           <Route path="/" element={<App/>}></Route>
           <Route path="/history" element={<History/>}></Route>

        </Routes>
          
    
        </>
      )}
    </div>
</>
)







  
 //i have to do the form in a different component 
}

export default App
