import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './projectSlider.css';

const ProjectSlider = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "430px",
        slidesToShow: 1,
        speed: 500,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    centerPadding: "100px",
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 755,
                settings: {
                    centerPadding: "15px",
                }
            }
        ]
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className='box'>
                    <img className='img' src="./images/projects/project/slide-2.png" alt="" />
                    <div className='overlay'></div>
                </div>
                <div className='box'>
                    <img className='img' src="./images/projects/project/slide-3.png" alt="" />
                    <div className='overlay'></div>
                </div>
                <div className='box'>
                    <img className='img' src="./images/projects/project/slide-1.png" alt="" />
                    <div className='overlay'></div>
                </div>
            </Slider>
        </div>
    );
}

export default ProjectSlider;