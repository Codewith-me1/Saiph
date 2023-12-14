

import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="carousel">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
              <SwiperSlide>
                  Innovation at the Core: We thrive on innovation,<br/>
                  embracing the latest technologies to build solutions<br/>
                  that stand the test of time.<br/>
              </SwiperSlide>
              <SwiperSlide>
                  Client-Centric Approach: Your success is our priority.<br/>
                  We work closely with you to understand your goals<br/>
                  and tailor our solutions to ensure your objectives<br/>
                  are not just met but surpassed.<br/>
              </SwiperSlide>
              <SwiperSlide>
                  Expertise Across Industries: SAiPH brings a wealth of<br/>
                  experience across various industries,<br/>
                  allowing us to provide insights and solutions<br/>
                  that resonate with your specific sector.<br/>
              </SwiperSlide>
              <SwiperSlide>
                  Agile Development: In a rapidly evolving digital landscape,<br/>
                  agility is key.Our agile development methodology ensures<br/>
                  flexibility and responsiveness to changing requirements.<br/>
          </SwiperSlide>

              
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
