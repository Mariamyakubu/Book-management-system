import Header from "./components/Header";
import Home  from "./components/Home";
import Icons from "./components/Icons"
import FeaturedSection from "./components/FeaturedSection";
import NewsLetter from "./components/NewsLetter";
import Arrivals from "./components/Arrivals";
import Deals from "./components/Deals"
import Review from "./components/Review";
import Blogs from "./components/Blogs"
import Footer from "./components/Footer";
//import SignUp from "./components/signup";
// import Genre from "./components/Genre"
// import AddToCart from "./components/AddToCart";
// import CustomerInfo from "./components/CustomerInfo";
 //import { Routes, Route } from 'react-router-dom';
// import React, { useState, useEffect} from "react";



function App() {
 return(
    <div className="App">
     
    <Header/>
    <Home/>
    <Icons/>
    <FeaturedSection/>
    <NewsLetter/>
    <Arrivals/>
    <Deals/>
    <Review/>
    <Blogs/>
    <Footer/>
    </div>
  );

}

export default App;