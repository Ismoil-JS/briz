import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import c from './Rooms.module.scss'
import Kottej2x1 from '../../assets/2x-kottej1.jpg'
import Kottej2x2 from '../../assets/2x-kottej2.jpg'
import Kottej2x3 from '../../assets/2x-kottej3.jpg'
import Kottej4x1 from '../../assets/4x-kottej1.jpg'
import Kottej4x2 from '../../assets/4x-kottej2.jpg'
import Kottej4x3 from '../../assets/4x-kottej3.jpg'
import Kottej5x1 from '../../assets/5x-kottej1.jpg'
import Kottej5x2 from '../../assets/5x-kottej2.jpg'
import Kottej5x3 from '../../assets/5x-kottej3.jpg'
import Kottej5x4 from '../../assets/5x-kottej4.jpg'
import Kottej5x5 from '../../assets/5x-kottej5.jpg'
import Standart2x1 from '../../assets/2x-standart1.jpg'
import Standart2x2 from '../../assets/2x-standart2.jpg'
import Standart2x3 from '../../assets/2x-standart3.jpg'
import Standart4x1 from '../../assets/4x-standart1.jpg'
import Standart4x2 from '../../assets/4x-standart2.jpg'
import Standart4x3 from '../../assets/4x-standart3.jpg'
import banner from '../../assets/roomBanner.jpeg'


const Rooms = () => {
  return (
    <div className={c.room_container}>
      <img className={c.banner} src={banner} alt="Kottej" />

      <p> Bu yerda siz xonalarimizning ichki xolati bilan tanishishingiz mumkin. </p>
      <div className={c.inner_container}>
        <div className={c.room}>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Kottej2x1} alt="Kottej" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Kottej2x2} alt="Kottej" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Kottej2x3} alt="Kottej" />
            </SwiperSlide>
          </Swiper>
        </div>
        <p>2 kishilik kottej</p>
      </div>
      <div className={c.inner_container}>
        <div className={c.room}>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Kottej4x1} alt="Kottej" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Kottej4x2} alt="Kottej" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Kottej4x3} alt="Kottej" />
            </SwiperSlide>
          </Swiper>
        </div>
        <p>4 kishilik kottej</p>
      </div>
      <div className={c.inner_container}>
        <div className={c.room}>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Kottej5x1} alt="Kottej" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Kottej5x2} alt="Kottej" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Kottej5x3} alt="Kottej" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Kottej5x4} alt="Kottej" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Kottej5x5} alt="Kottej" />
            </SwiperSlide>
          </Swiper>
        </div>
        <p>5 kishilik kottej</p>
      </div>
      <div className={c.inner_container}>
        <div className={c.room}>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Standart2x1} alt="Kottej" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Standart2x2} alt="Kottej" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Standart2x3} alt="Kottej" />
            </SwiperSlide>
          </Swiper>
        </div>
        <p>2 kishilik standart uy</p>
      </div>
      <div className={c.inner_container}>
        <div className={c.room}>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Standart4x1} alt="Kottej" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Standart4x2} alt="Kottej" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Standart4x3} alt="Kottej" />
            </SwiperSlide>
          </Swiper>
        </div>
        <p>4 kishilik standart uy</p>
      </div>
    </div>
  )
}

export default Rooms



