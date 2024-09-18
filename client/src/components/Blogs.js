

import React from "react";
import BookBlog from "./BookBlog";
import productBlogs from "../Database/BlogsBookData";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const Blogs = () => {
  return (
    <div>
      <section className="blogs" id="blogs">
        <h1 className="heading">
          <span> Blogs </span>
        </h1>

        <div className="blogs blogs-slider">
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
              {productBlogs.map(blog => (
                <SwiperSlide key={blog.id}>
                  <BookBlog
                    image={blog.image}
                    description={blog.description}
                    content={blog.content}
                    link={blog.link}
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

export default Blogs;
