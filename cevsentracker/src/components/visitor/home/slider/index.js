import React from 'react';
import "./style.scss";
import { config } from '../../../../config';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';

const { projectDetails: { slider } } = config;

const Slider = () => {
    const pagination = {
        clickable: true,
    }

    return (
        <Swiper
            effect="fade"
            pagination={pagination}
            navigation={true}
            modules={[Navigation, Pagination, EffectFade, Autoplay]}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false
            }}
            className='slider'
        >
            {
                slider.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className='content'>
                            <h2>{slide.title}</h2>
                            <p>{slide.desc}</p>
                        </div>
                        <img
                            src={require(`../../../../assets/image/slider/${slide.image}`)}
                            alt={slide.title}
                            title={slide.title}
                        />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default Slider