import "../index.css"
import logo from "../assets/amazingdojo-logo.png"

const Navbar = () => {

    return ( 
        <nav className="mycontainer">
        <div className="nav-bar">
            <img src = { logo } alt="amazingdojo logo" className="main-logo"/>
            <h1 className="nav-title">AmazingDojo</h1>
        </div>
        </nav>

    );
}
 
export default Navbar;