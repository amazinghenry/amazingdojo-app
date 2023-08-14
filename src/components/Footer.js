import logo from "../assets/amazingdojo-logo.png"
import github from "../assets/github-logo.svg"
import instagram from "../assets/instagram-logo.svg"
import twitter from "../assets/twitter-logo.svg"

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
                    <a href="/">
                        <img src={logo} className="main-logo" alt="amazingdojo logo"/>
                    </a>
                </div>
                <div className="social">
                    <a href = {links.github} className="github-link">
                        <img src={github} alt="github link" className="main-logo" />
                    </a>
                    <a href={links.instagram} className="instagram-link">
                        <img src={instagram} alt="instagram link" className="main-logo" />
                    </a>
                    <a href={links.twitter} className="twitter-link">
                        <img src={twitter} alt="twitter link" className="main-logo" />
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