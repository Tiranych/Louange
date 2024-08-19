import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import './HeaderSlider.css';

import IMG_1 from '../../../../public/images/header/header-img.png';
import IMG_2 from '../../../../public/images/header/header-img2.png';

const HeaderSlider = () => {
    const params = {
        modules: [EffectFade, Autoplay, Pagination],
        autoplay: {
            delay: 4000,
        },
        pagination: {
            clickable: true
        },
        effect: "fade",
        className: "headerSwiper",
    }

    return (
        <Swiper {...params}>
            <SwiperSlide>
                <div className="header__img" style={{backgroundImage: `url(${IMG_1})`}}></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="header__img" style={{backgroundImage: `url(${IMG_2})`}}></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="header__img" style={{backgroundImage: `url(${IMG_1})`}}></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="header__img" style={{backgroundImage: `url(${IMG_2})`}}></div>
            </SwiperSlide>
        </Swiper>
    )
}

export default HeaderSlider;