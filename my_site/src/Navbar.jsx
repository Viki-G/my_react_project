import { Link, Navigate} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import History from './History';
import App from './App';

function Navbar()
{   const navigate = useNavigate();

    const handleLogOut=()=>{
        navigate('/');
      }

return(
<nav id="nav">
    <ul>
    <li><Link to="/home">Home</Link></li>
    <li><Link to="/history">History</Link></li>
    <li><Link to="/animation">Animations</Link></li>
    <li><Link to="/process">Process</Link></li>
    <li className="liLogOut" ><button className="logOut" onClick={handleLogOut}>LogOut</button></li>

    </ul>
</nav>
)

}

export default Navbar;