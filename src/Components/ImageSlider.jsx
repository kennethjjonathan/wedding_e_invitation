import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';


const ImageSlider = () => {
    const [current, setCurrent] = useState(0);
    const length = SliderData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(SliderData) || length <= 0) {
        return null;
    }

    return (
        <div className="gallery-slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? "active-slide" : "inactive-slide"} key={index}>
                        {index === current && (
                            <img src={slide.image} alt="Marriage Photos" className="gallery-slider-images" />
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default ImageSlider