import './footer.css';

import github from "../../assets/github-logo.svg"
import instagram from "../../assets/instagram-logo.svg"
import twitter from "../../assets/twitter-logo.svg"

const links = {
    twitter :  'https://twitter.com/amazing_henry',
    github : 'https://github.com/amazinghenry',
    instagram : 'https://www.instagram.com/amazinghenry/'
}

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()

    return ( 
        <footer className="container-fluid">
        <div className="mycontainer">

            <div className="footer-group">

                <div className="footer-item">
                    <a href="/" className="footer-main">
                        AmazingDojo
                    </a>
                </div>
                <div className="social">
                    <a href = {links.github}>
                        <img src={github} alt="github link" className="img-fluid footer-logo" />
                    </a>
                    <a href = {links.github}>
                        <img src={instagram} alt="github link" className="img-fluid footer-logo" />
                    </a>
                    <a href = {links.github}>
                        <img src={twitter} alt="github link" className="img-fluid footer-logo" />
                    </a>

                   

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