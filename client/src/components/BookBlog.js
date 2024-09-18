import React from "react";

const BookBlog = ({ image, description, content, link }) => {
  return (
    <div className="swiper-slide box">
      <div className="image">
        <img src={image} alt={description} />
      </div>
      <div className="content">
        <h3>{description}</h3>
        <p>{content}</p>
        {link}
      </div>
    </div>
  );
};

export default BookBlog;
