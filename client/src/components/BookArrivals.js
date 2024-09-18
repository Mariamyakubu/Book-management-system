import React from "react";

const BookArrivals= ({id,name, image, price})  => {
  return (
    <div className="swiper-slide box">
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="content">
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default BookArrivals;