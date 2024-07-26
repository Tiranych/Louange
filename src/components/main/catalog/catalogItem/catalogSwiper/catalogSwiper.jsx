import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import Slide from './slide/Slide.jsx';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import 'swiper/css';
import './catalogSwiper.css';

const MySwiper = () => {
    const params = {
        modules: [Navigation, Pagination, Grid],
        className: "catalogSwiper",
        slidesPerView: 4,
        grid: {
            rows: 3,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            clickable: true,
            renderBullet: function (index, className) {
                for (index; index < 2;) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                }
                for (index; index > 7;) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                }
                return '<span class="' + className + ' pagination-ellipsis' + '">' + '...' + '</span>';
            },
        },
        breakpoints: {
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 3,
                },
            },
            768: {
                slidesPerView: 4,
                grid: {
                    rows: 3,
                },
            }
        }
    }

    const slides = [];

    for (let i = 0; i < 39; i++) {
        slides.push(<SwiperSlide key={i}><Slide /></SwiperSlide>)
    }

    return (
        <>
            <Swiper {...params}>
                {slides}
                <div className='swiper-navigation'>
                    <div className='swiper-button-prev'></div>
                    <div className='swiper-button-next'></div>
                </div>
            </Swiper>
        </>
    );
}

export default MySwiper;