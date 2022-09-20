import React from "react";
import "./Carouselmovie.css";
import { useState } from "react";
import Slider from "react-slick";
import { SliderData } from "./data.js";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
function App() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="brands scroll-smooth">
      <Slider {...settings}>
        {SliderData.map((img, idx) => (
          <div className={idx === imageIndex ? "brandslide brandactiveSlide" : "brandslide"}>
            <img src={img.image} alt="/" key={img.id} className="big" />
            
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App; 