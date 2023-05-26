import React from 'react';
import "./style.scss";
import { config } from '../../../../config';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const { projectDetails: { slider }, routes: {register} } = config;


const Slider = () => {
    
    const navigate = useNavigate();

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
                            <Button onClick={() => navigate(register)}>
                            Get Started
                        </Button>
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