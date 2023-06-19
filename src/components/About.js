const About = () => {

    return (
        <section className="about">
            <div className="mycontainer">
                
                <div className="about-group">
                    <div className="about-text">
                    <h2 className="about-title">About Amazingdojo</h2>
                        <p>As a business owner, you understand the importance of having a strong online presence. That's where we come in. Our team of experienced web developers is dedicated to creating custom, user-friendly websites that will help you connect with customers and grow your business. We understand that every business is unique, which is why we take the time to get to know you and your needs. Whether you're looking to launch a brand-new website or revamp your existing one, we will work closely with you to create a website that perfectly represents your business.</p>
                        <p>In addition to web development, we also offer ongoing support and maintenance services to ensure your website remains up-to-date and secure. Our goal is to help you succeed online, and we are dedicated to providing you with the best possible experience. Contact us today to schedule a consultation and see how we can help you grow your business online.</p>
                        <a href="/" className="about-link" >Contact Us</a>
                    </div>
                    <div className="about-counter">
                        <div className="about-counter-group">

                            <div className="exp-item">
                                <h4 className="value exp-item-title">10+</h4>
                                <p className="exp-item-text">Years of experience</p>
                            </div>

                            <div className="exp-item">
                                <h4 className="value exp-item-title" num="1000">1000+</h4>
                                <p className="exp-item-text">Projects completed</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default About;