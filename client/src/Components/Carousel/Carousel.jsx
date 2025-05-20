import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        
            <Slider {...settings}>
      
      <div>
       <img src="https://i.ibb.co/sVmMJrV/donate-sign-charity-campaign.jpg" alt="" />
      </div>
      <div>
        <img src="https://i.ibb.co/5KLKp0Q/volunteer-helping-with-donation-box.jpg" alt="" />
      </div>
    
    </Slider>
            
       
    );
};

export default Carousel;