import "../index.css"
import logo from "../assets/amazingdojo-logo.png"

const Navbar = () => {

    return ( 
        <nav className="mycontainer-wrapper">
        <div className="mycontainer nav-bar">
            <img src = { logo } alt="amazingdojo logo" className="main-logo"/>
            <ul className="list-group">
                <li className="list-item"><a href="/" className="link-item">home</a></li>
                <li className="list-item"><a href="/" className="link-item">about</a></li>
                <li className="list-item"><a href="/" className="link-item">projects</a></li> 
                <li className="list-item"><a href="/" className="link-item">testimonials</a></li> 
                <li className="list-item"><a href="/" className="link-item">contact</a></li> 
            </ul>
        </div>
        </nav>

    );
}
 
export default Navbar;