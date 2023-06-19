import mockup from '../assets/amazingmockup.png'

const Header = () => {
    return ( 
        <header>
            <div className="header-group mycontainer">
                <img src={ mockup } alt="mockup" className='header-image' />
                <div className="header-text">
                    <h2 className="header-text-intro">Elevate Your Online Presence with Custom Web Development</h2>
                    <p className="header-text-content">You have a unique story to tell. Let us help you tell it with a website that showcases your brand and connects you with customers.
                    Don't settle for a generic, cookie-cutter website. Partner with us for a web development solution tailored specifically for your business.</p>
                    <a href="/" className="header-link"> See Projects </a>
                </div>
            </div>
        </header>
    );
}
 
export default Header;