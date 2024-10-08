import React from "react";
import { Carousel } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.css';
import './ProjectsSwiper.css';

import Slide from './slide/Slide';

const ProjectsSwiper = () => {
    return (
        <>
            <Carousel className='carousel_1' interval={null}>
                <Carousel.Item>
                    <Slide />
                </Carousel.Item>
                <Carousel.Item>
                    <Slide />
                </Carousel.Item>
                <Carousel.Item>
                    <Slide />
                </Carousel.Item>
                <Carousel.Item>
                    <Slide />
                </Carousel.Item>
                <Carousel.Item>
                    <Slide />
                </Carousel.Item>
                <Carousel.Item>
                    <Slide />
                </Carousel.Item>
                <Carousel.Item>
                    <Slide />
                </Carousel.Item>
                <Carousel.Item>
                    <Slide />
                </Carousel.Item>
                <Carousel.Item>
                    <Slide />
                </Carousel.Item>
                <Carousel.Item>
                    <Slide />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default ProjectsSwiper;