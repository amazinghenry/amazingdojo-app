import './header.css';
import mockup from '../../assets/amazingmockup.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <section className="header-group container">
        <img src={ mockup } alt="mockup" className='header-image' />
        <div className="header-text">
        <h2 className="header-text-intro">Elevate Your Online Presence with Custom Web Development</h2>
        <p className="header-text-content">You have a unique story to tell. Let us help you tell it with a website that showcases your brand and connects you with customers.
        Don't settle for a generic, cookie-cutter website. Partner with us for a web development solution tailored specifically for your business.</p>
        <Link to="/project" className="header-link"> Projects </Link>
                </div>
        </section>
     );
}
 
export default Header;