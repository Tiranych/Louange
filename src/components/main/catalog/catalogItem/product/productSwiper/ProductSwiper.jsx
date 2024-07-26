import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import './ProductSwiper.css';

const ProductSwiper = () => {
    const params = {
        modules: [Navigation],
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        className: 'productSwiper',
    }

    return (
        <Swiper {...params}>
            <SwiperSlide><div style={{ backgroundImage: `url("/images/catalog/productSwiper/slide-1.jpg")`, backgroundSize:'cover', backgroundPosition: 'center', height: '380px' }}></div></SwiperSlide>
            <SwiperSlide><div style={{ backgroundImage: `url("/images/catalog/productSwiper/slide-1.jpg")`, backgroundSize:'cover', backgroundPosition: 'center', height: '380px' }}></div></SwiperSlide>
            <SwiperSlide><div style={{ backgroundImage: `url("/images/catalog/productSwiper/slide-1.jpg")`, backgroundSize:'cover', backgroundPosition: 'center', height: '380px' }}></div></SwiperSlide>
            <SwiperSlide><div style={{ backgroundImage: `url("/images/catalog/productSwiper/slide-1.jpg")`, backgroundSize:'cover', backgroundPosition: 'center', height: '380px' }}></div></SwiperSlide>
            <SwiperSlide><div style={{ backgroundImage: `url("/images/catalog/productSwiper/slide-1.jpg")`, backgroundSize:'cover', backgroundPosition: 'center', height: '380px' }}></div></SwiperSlide>
            <div className='swiper-navigation'>
                <div className='swiper-button-prev'></div>
                <div className='swiper-button-next'></div>
            </div>
        </Swiper>
    )
}

export default ProductSwiper;