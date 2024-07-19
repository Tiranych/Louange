import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css/scrollbar';
import 'swiper/css';
import './MySwiper.css';

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
                <SwiperSlide><img src="/images/about/partner-1.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/images/about/partner-2.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/images/about/partner-3.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/images/about/partner-4.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/images/about/partner-1.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/images/about/partner-2.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/images/about/partner-3.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/images/about/partner-4.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/images/about/partner-1.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/images/about/partner-2.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/images/about/partner-3.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/images/about/partner-4.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/images/about/partner-1.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/images/about/partner-2.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/images/about/partner-3.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/images/about/partner-4.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/images/about/partner-1.svg" alt="" /></SwiperSlide>
            </Swiper>
            <div className='mySwiper-scrollbar'></div>
        </>
    );
}

export default MySwiper;