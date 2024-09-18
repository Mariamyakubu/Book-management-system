import React from "react";
import BookReview from "./BookReview";
import productReviewed from "../Database/BookReviewData.js";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Review = () => {
  let allReviewedBooks = productReviewed.map((reviewed) => {
    return (
      <SwiperSlide key={reviewed.id}>
        <BookReview
          key={reviewed.id}
          name={reviewed.name}
          image={reviewed.image}
          description={reviewed.description}
        />
      </SwiperSlide>
    );
  });

  const [data, setData] = React.useState([...allReviewedBooks]);

  return (
    <div>
      <section className="reviews" id="reviews">
        <h1 className="heading">
          <span> client's reviews </span>
        </h1>

        <div className="swiper reviews-slider">
          <div className="swiper-wrapper">
            <Swiper
              spaceBetween={10}
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
              {data}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;