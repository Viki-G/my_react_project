import { Link } from 'react-router-dom';
import './Navbar.css'
import History from './History';

function Navbar()
{
return(
<nav id="nav">
    <ul>
    <li><Link to="/home">Home</Link></li>
    <li><Link to="/history">History</Link></li>
    <li><Link to="/animation">Animations</Link></li>

    </ul>
</nav>
)

}

export default Navbar;