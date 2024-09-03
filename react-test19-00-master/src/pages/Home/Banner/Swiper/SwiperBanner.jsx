import React from 'react';
import OneSwiper from './OneSwiper/OneSwiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


const SwiperBanner = () => {

  const Clickpagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '</span>';
    },
  };
    return (
        <Swiper pagination={Clickpagination}
        
        
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <OneSwiper/>
        </SwiperSlide>
        <SwiperSlide>
            <OneSwiper/>
        </SwiperSlide>
        <SwiperSlide>
            <OneSwiper/>
        </SwiperSlide>
        
      </Swiper>
    );
};

export default SwiperBanner;