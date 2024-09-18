import React from "react";
import HomeBook from "./HomeBook";
import productHome from "../Database/homeProductsData";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const Home=()=>{

    let allBooksInHome = productHome.map((HBooks) => {
        return (
          <SwiperSlide>
            <HomeBook
              key={HBooks.id}
              image={HBooks.image}
            />
          </SwiperSlide>

);
});

const [data, setData] = React.useState([...allBooksInHome]);



    return(
        <div>
   <section className="home" id="home">
                <div className="row">
                    <div className="content">
                        <h3>upto 75% off</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Obcaecati quam dolorum, quaerat, dolores et iure sunt porro odit id a blanditiis repellat placeat quia voluptatum ducimus cum nobis magnam minus.</p>
                        <a href="Product.html" className="btn">shop now</a>
                    </div>

                    <div className="swiper books-slider">
                    <div class="swiper-wrapper">
                        <Swiper
                                modules={[Autoplay, Navigation, Pagination]} 
                                className="mySwiper"
                                spaceBetween={10}
                                centeredSlides={true}
                                loop={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                navigation={false}
                            
                                breakpoints={{
                                    0:{
                                      slidesPerView:1,
                                    },
                          
                                    450:{
                                      slidesPerView:2,
                                    },
                          
                                    768:{
                                      slidesPerView:3,
                                    },
                          
                                    1024:{
                                      slidesPerView:4,
                                    },
                          }}
                            >
                                {
                                    allBooksInHome
                                }
                               
                            </Swiper>
                        
                    </div>
                    <img src="/images/bookimages/BookShelf.jpg" className="stand" alt="stand" />
                    </div>
                </div>
            </section>
 </div>
 )}
export default Home;