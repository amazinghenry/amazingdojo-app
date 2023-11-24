import './testimonial.css';
import testimonialData from "../../data/testimonialData";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Testimonials = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        auto: true

    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={i <= rating ? "star-filled" : "star-empty"}> &#9733; </span>
            );
        }
        return stars;
    };

    return ( 
        <section className="container-fluid testimonial" id="testimonial">
            <div className="container">
                <h3 className="testimonial-title">testimonials</h3>

                <div className="testimonial-group">
                    <Slider {...settings}>
                    {testimonialData.map((item, index) => (
                            <div key={index} className="testimonial-item">
                                <div className="stars">{renderStars(item.rating)}</div>
                                <h4 className="testimonial-item-title">{item.user}</h4>
                                <p className="testimonial-item-text"> {item.comment}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
     );
}
 
export default Testimonials;