import uiImage from "../assets/ui-design-image.png"
import webImage from "../assets/webdev-image.png"
import visualImage from "../assets/visualdesign-image.png"

const Services = () => {
    return ( 
        <section className = "services" id="aboutus">
            <div className = "container">
                <h2 className="service-title">Our Services</h2>
                <div className = "service-group">
                    <div className = "service-item">
                        <img src = { uiImage } className = "service-item-image" alt="ui design icon"/>
                        <h3 className = "service-item-title">ui design</h3>
                        <p className = "service-item-text">I design user interfaces that make it simple, effective, and fun for users to interact with a product.</p>
                    </div>
    
                    <div className="service-item">
                        <img src = { webImage } className = "service-item-image" alt="web dev icon"/>
                        <h3 className = "service-item-title">web dev</h3>
                        <p className = "service-item-text"> As a web developer, I produce dependable and efficient web-based programmes and services.</p>
                    </div>
    
                    <div className="service-item">
                        <img src = { visualImage } className = "service-item-image" alt="visual design icon"/>
                        <h3 className = "service-item-title">visual designs</h3>
                        <p className = "service-item-text">I am highly skilled in incorporating text, colour, and graphics to improve a design or interaction.</p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Services;