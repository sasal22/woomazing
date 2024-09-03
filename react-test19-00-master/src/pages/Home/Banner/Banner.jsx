import React from 'react';
import './Banner.scss'
import SwiperBanner from './Swiper/SwiperBanner';

const Banner = () => {
    return (
        <section className='banner'>
            <SwiperBanner/>
        </section>
    );
};

export default Banner;