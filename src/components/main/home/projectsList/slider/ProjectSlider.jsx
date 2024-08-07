import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProjectSlider.css';

const ProjectSlider = () => {
    const settings = {
        className: "homePageSlider",
        centerMode: true,
        infinite: true,
        centerPadding: "350px",
        slidesToShow: 1,
        speed: 500,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    centerPadding: "100px",
                }
            },
            {
                breakpoint: 850,
                settings: {
                    centerPadding: "130px",
                }
            },
            {
                breakpoint: 755,
                settings: {
                    centerPadding: "10px",
                }
            }
        ]
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className='box'>
                    <p className="text">Кремль</p>
                    <img className='img' src="/images/home/projects/1.jpg" alt="" />
                    <div className='overlay'></div>
                </div>
                <div className='box'>
                    <p className="text">Кремль</p>
                    <img className='img' src="/images/home/projects/2.jpg" alt="" />
                    <div className='overlay'></div>
                </div>
                <div className='box'>
                    <p className="text">Кремль</p>
                    <img className='img' src="/images/home/projects/3.jpg" alt="" />
                    <div className='overlay'></div>
                </div>
            </Slider>
        </div>
    );
}

export default ProjectSlider;