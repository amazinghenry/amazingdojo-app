import logo from "../assets/amazingdojo-logo.png"
import menuButton from "../assets/menu.png"
import { Link } from "react-router-dom"

const Navbar = () => {

    return ( 
        <nav className="container-fluid">
        <div className="mycontainer nav-group">
            <Link to = "/" className="navbar">
            <img src = { logo } alt="amazingdojo logo" className="main-logo"/>
            <h1 className="nav-title">AmazingDojo</h1>
            </Link>
        <div className="dropdown">
            <button className="dropbtn"><img src={menuButton} className="button-icon" alt="" /></button>
            <div className="dropdown-content">
                <Link className="link-item" to ="/about"  rel="noopener noreferrer">About</Link>
                <Link className="link-item" to ="/project"  rel="noopener noreferrer">Projects</Link>
                <Link className="link-item" to ="/contact"  rel="noopener noreferrer">Contact</Link>
                <Link className="link-item" to ="/"  rel="noopener noreferrer">Store <span>(Coming Soon)</span></Link>
            </div>
        </div>
        </div>
        </nav>

    );
}
 
export default Navbar;