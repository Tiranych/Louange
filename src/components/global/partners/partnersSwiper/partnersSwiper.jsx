import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

import 'swiper/css/scrollbar';
import 'swiper/css';
import './partnersSwiper.css';

import SLIDE_1 from '../../../../../public/images/about/partner-1.svg';
import SLIDE_2 from '../../../../../public/images/about/partner-2.svg';
import SLIDE_3 from '../../../../../public/images/about/partner-3.svg';
import SLIDE_4 from '../../../../../public/images/about/partner-4.svg';

const MySwiper = () => {
    const params = {
        modules: [Scrollbar],
        slidesPerView: 4,
        spaceBetween: 12,
        scrollbar: {
            el: '.mySwiper-scrollbar',
            draggable: true,
        }
    }

    return (
        <>
            <Swiper {...params}>
                <SwiperSlide><div style={{backgroundImage: `url(${SLIDE_1})`, height: '128px'}}></div></SwiperSlide>
                <SwiperSlide><div style={{backgroundImage: `url(${SLIDE_2})`, height: '128px'}}></div></SwiperSlide>
                <SwiperSlide><div style={{backgroundImage: `url(${SLIDE_3})`, height: '128px'}}></div></SwiperSlide>
                <SwiperSlide><div style={{backgroundImage: `url(${SLIDE_4})`, height: '128px'}}></div></SwiperSlide>
                <SwiperSlide><div style={{backgroundImage: `url(${SLIDE_1})`, height: '128px'}}></div></SwiperSlide>
                <SwiperSlide><div style={{backgroundImage: `url(${SLIDE_2})`, height: '128px'}}></div></SwiperSlide>
                <SwiperSlide><div style={{backgroundImage: `url(${SLIDE_3})`, height: '128px'}}></div></SwiperSlide>
                <SwiperSlide><div style={{backgroundImage: `url(${SLIDE_4})`, height: '128px'}}></div></SwiperSlide>
                <SwiperSlide><div style={{backgroundImage: `url(${SLIDE_1})`, height: '128px'}}></div></SwiperSlide>
                <SwiperSlide><div style={{backgroundImage: `url(${SLIDE_2})`, height: '128px'}}></div></SwiperSlide>
                <SwiperSlide><div style={{backgroundImage: `url(${SLIDE_3})`, height: '128px'}}></div></SwiperSlide>
                <SwiperSlide><div style={{backgroundImage: `url(${SLIDE_4})`, height: '128px'}}></div></SwiperSlide>
                <SwiperSlide><div style={{backgroundImage: `url(${SLIDE_1})`, height: '128px'}}></div></SwiperSlide>
                <SwiperSlide><div style={{backgroundImage: `url(${SLIDE_2})`, height: '128px'}}></div></SwiperSlide>
                <SwiperSlide><div style={{backgroundImage: `url(${SLIDE_3})`, height: '128px'}}></div></SwiperSlide>
                <SwiperSlide><div style={{backgroundImage: `url(${SLIDE_4})`, height: '128px'}}></div></SwiperSlide>
                <SwiperSlide><div style={{backgroundImage: `url(${SLIDE_1})`, height: '128px'}}></div></SwiperSlide>
            </Swiper>
            <div className='mySwiper-scrollbar'></div>
        </>
    );
}

export default MySwiper;