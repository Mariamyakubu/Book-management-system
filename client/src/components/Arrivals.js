import React from "react";
import productArrivals from "../Database/ArrivalsBooksData.js";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BookArrivals from "./BookArrivals.js";
const Arrivals = () => {
    return (
      <div>
        <section className="arrivals" id="arrivals">
          <h1 className="heading">
            <span> New Arrivals</span>
          </h1>
  
          <div className="swiper arrivals-slider">
            <div className="swiper-wrapper">
              <Swiper
                spaceBetween={20}
                loop={true}
                centeredSlides={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  450: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
              >
                {productArrivals.map(arrivals => (
                  <SwiperSlide key={arrivals.id}>
                    <BookArrivals
                      image={arrivals.image}
                      name={arrivals.name}
                      price={arrivals.price}
                      
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Arrivals;
  