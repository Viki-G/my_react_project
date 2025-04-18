import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar()
{
return(
<nav id="nav">
    <ul>
    <li><Link to="/home">Home</Link></li>
    <li><Link to="/home">History</Link></li>
    <li><Link to="/home">Animations</Link></li>

    </ul>
</nav>
)

}

export default Navbar;