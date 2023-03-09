import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaBeer } from 'react-icons/fa';


const ImageSlider = () => {
    const [current, setCurrent] = useState(0);
    const length = SliderData.length;

    return (
        <div>
            <FaBeer />
            <button className="left-button">previous</button>
            <button className="right-button">next</button>
            {SliderData.map((slide, index) => {
                return <img src={slide.image} alt="Marriage Photos" />
            })};
        </div>
    )
}

export default ImageSlider