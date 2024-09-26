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
import Genre from "./components/Genre";
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
//import SignUp from "./components/signup"
// import AddToCart from "./components/AddToCart";
// import CustomerInfo from "./components/CustomerInfo";



function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/books');
        console.log("Books data from the database:", response.data); // Display data to the console
        setBooks(response.data); // Update the state with the fetched books
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks(); // Call the function to fetch books
  }, []);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<>
          <Header />
          <Home />
          
          <Icons />
          <FeaturedSection />
          <NewsLetter />
          <Arrivals />
          <Deals />
          <Review />
          <Blogs />
          <Footer />
        </>} />
        <Route path="/genre" element={<Genre books= {books}/>} />
      </Routes>


    </div>
  );
}

export default App;



