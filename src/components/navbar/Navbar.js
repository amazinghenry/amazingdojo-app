import './navbar.css';

import { Link } from "react-router-dom"

const Navbar = () => {

    return ( 
        <nav className="container">
            <Link to='/' className="main-logo"> 
            AmazingDojo
            </Link>
            
            <div className="link-group">
                <Link className="link-item" to ="/about"  rel="noopener noreferrer">About</Link>
                <Link className="link-item" to ="/project"  rel="noopener noreferrer">Projects</Link>
                <Link className="link-item" to ="/contact"  rel="noopener noreferrer">Contact</Link>
                <Link className="link-item" to ="/store"  rel="noopener noreferrer">Store </Link>
            </div>
        </nav>

    );
}
 
export default Navbar;