import { Link } from "react-router-dom";
import image1 from '../assets/about-image1.jpg';
import image2 from '../assets/about-image2.jpg';
import image3 from '../assets/about-image3.jpg';
const About = () => {

    return (
        <section className="about container">
            <h2 className="about-title">About Amazingdojo</h2>
            <div className="about-group">

            <div className="about-item">
            <p className="about-item-text item-a">As a business owner, you understand the importance of having a strong online presence. That's where we come in. Our team of experienced web developers is dedicated to creating custom, user-friendly websites that will help you connect with customers and grow your business.
            </p>
            <img src={image1} alt="man using computer" className="img-fluid about-item-img item-b" />
            </div>

            <div className="about-item">
            <img src={image2} alt="presentation" className="img-fluid about-item-img item-c"  />
            <p className="about-item-text item-d">We understand that every business is unique, which is why we take the time to get to know you and your needs. Whether you're looking to launch a brand-new website or revamp your existing one, we will work closely with you to create a website that perfectly represents your business.
            </p>
            </div>

            <div className="about-item">
            <p className="about-item-text item-e">In addition to web development, we also offer ongoing support and maintenance services to ensure your website remains up-to-date and secure. Our goal is to help you succeed online, and we are dedicated to providing you with the best possible experience. Contact us today to schedule a consultation and see how we can help you grow your business online.
            </p>
            <img src={image3} alt="client handshake" className="img-fluid about-item-im item-f" />
            </div>
            </div>
            <Link to='/contact' className="about-link">Contact Now</Link>
        </section>
    );
}
 
export default About;