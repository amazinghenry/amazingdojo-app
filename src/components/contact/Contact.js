import contact from "../../assets/contact-header.jpg";
import Forms from "../form/Form";

import './contact.css';

const Contact = () => {
    return ( 
        <section className="container contact">
            <img src={contact} alt="contact display" className="img-fluid contact-header" />
        <div className="container contact-page">
            <h2 className="contact-title">LETS WORK ON YOUR NEXT PROJECT</h2>
            <p className="contact-text"> Our Customer service team is waiting to assist you</p>
            <p className="contact-text">Please allow up to 2-Business days response time in order for us to fully address your inquiries</p>
            <Forms />
        </div>
        </section>
     );
}
 
export default Contact;