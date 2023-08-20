import React, { useEffect } from 'react'
import styles from './Carousel.module.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';

const Controls = ({data}) => {
    const swiper = useSwiper();

    console.log("In carousel, swiper - ", swiper);

    useEffect(()=>{
        swiper.slideTo(0);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data])

    return <></>
}

const Carousel = ({data, renderCardComponent}) => {
  return (
    <div className={styles.wrapper}>
        <Swiper initialSlide={0} modules={{Navigation}} slidesPerView={"auto"} spaceBetween={40} allowTouchMove>
            <Controls data={data}/>
                <CarouselLeftNavigation />
                <CarouselRightNavigation />
                <div className={styles.swiperWrapper}>
                {
                    data.map(item => (
                        <SwiperSlide>{renderCardComponent(item)}</SwiperSlide>
                    ))
                }
                </div>

        </Swiper>

    </div>
  )
}

export default Carousel