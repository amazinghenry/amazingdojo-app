import "../index.css"
import logo from "../assets/amazingdojo-logo.png"

const Navbar = () => {

    return ( 
        <nav className="container-fluid">
        <div className="mycontainer nav-group">
            <div className="navbar">
            <img src = { logo } alt="amazingdojo logo" className="main-logo"/>
            <h1 className="nav-title">AmazingDojo</h1>
            </div>
            <div className="link-group">
                <a className="link-item" href="/"  rel="noopener noreferrer">Home</a>
                <a className="link-item" href="/"  rel="noopener noreferrer">About</a>
                <a className="link-item" href="/"  rel="noopener noreferrer">Projects</a>
                <a className="link-item" href="/"  rel="noopener noreferrer">Contact</a>
                <a className="link-item" href="/"  rel="noopener noreferrer">Blog</a>
            </div>
        </div>
        </nav>

    );
}
 
export default Navbar;