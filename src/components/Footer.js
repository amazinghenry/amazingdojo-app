import "../index.css"
import logo from "../assets/amazingdojo-logo.png"


const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()

    return ( 
        <footer className="container-fluid">
        <div className="mycontainer">
            <div className="footer-group">
                <div className="footer-item">
                    <a href="/">
                        <img src={logo} className="img-fluid" alt="amazingdojo logo"/>
                    </a>
                </div>
                <div class="footer-item social">
                    <a href="/"><i className="fa-brands fa-instagram fa-2x"></i></a>
                    <a href="/"><i className="fa-brands fa-twitter fa-2x"></i></a>
                    <a href="/"><i className="fa-brands fa-facebook fa-2x"></i></a>
                </div>
                <div className="footer-item">
                    <p>&copy; { year } All rights Reserved. Designed &#38; Developed by Henry Adodo </p>
                </div>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;