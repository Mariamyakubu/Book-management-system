import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";

const BookList = ({ books, error, isBooksVisible }) => {
  return (
    <>
      {error && <p className="error">{error}</p>}
      {isBooksVisible && (
        <div className="swiper arrivals-slider">
          <Swiper
            spaceBetween={10}
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {books.map(book => (
              <SwiperSlide key={book.book_id} className="swiper-slide box">
                <div className="image">
                  <img src={book.imagelink} alt={book.title} />
                </div>
                <div className="content">
                  <h3>{book.title}</h3>
                  <div className="price">${book.price}<span>${book.price}</span></div>
                  <p>Author: {book.author}</p>
                  <p>Description: {book.description}</p>
                  <p>Publication Date: {book.publication_date}</p>
                  <p>Genre: {book.genre}</p>
                  <p>In Stock: {book.in_stock}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default BookList;