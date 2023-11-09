import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import styled from 'styled-components'
import { Container } from '@mui/material';



SwiperCore.use([Navigation, Pagination, Autoplay])

function Banner() {
  return(
    <div>
      <Container>
      <Swiper
        className="banner"
        spaceBetween={50}
        slidesPerView='auto'
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        centeredSlides={true}
        slidesOffsetBefore={400}
        slidesOffsetAfter={400} 
      >

        <SwiperSlide>
          <img width={500} src='https://swiperjs.com/demos/images/nature-1.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img width={500} src='https://swiperjs.com/demos/images/nature-2.jpg' />   
        </SwiperSlide>
        <SwiperSlide>
          <img width={500} src='https://swiperjs.com/demos/images/nature-3.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img width={500} src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>

      </Swiper>
      </Container>
    </div>
  )
}

export default Banner;

const StyledSwiper = styled(Swiper)`
position:absolute;
  width: "752px";
  height: "752px"
`;    

const BannerWrapper = styled.div`
background-color: gray;
width: 50%;
height: 400px;

`;