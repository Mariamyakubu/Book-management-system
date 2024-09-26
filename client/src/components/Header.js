// import React, { useState } from "react";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";
// import CustomerInfo from "./CustomerInfo";
// import Genre from "./Genre";  // Import the Genre component

// const Header = () => {
//   const [showSignIn, setShowSignIn] = useState(false);
//   const [showSignUp, setShowSignUp] = useState(false);
//   const [showCustomerInfo, setShowCustomerInfo] = useState(false);
//   const [showGenreDropdown, setShowGenreDropdown] = useState(false);  // State for showing genre dropdown

//   const handleUserIconClick = () => {
//     setShowSignIn(true);
//     setShowSignUp(false);
//     setShowCustomerInfo(false);
//   };

//   const handleSignUpClick = () => {
//     setShowSignUp(true);
//     setShowSignIn(false);
//     setShowCustomerInfo(false);
//   };

//   const handleCustomerInfoClick = () => {
//     setShowCustomerInfo(true);
//     setShowSignIn(false);
//     setShowSignUp(false);
//   };

//   const closeForms = () => {
//     setShowSignIn(false);
//     setShowSignUp(false);
//     setShowCustomerInfo(false);
//   };

//   // Toggle genre dropdown visibility
//   const toggleGenreDropdown = () => {
//     setShowGenreDropdown(!showGenreDropdown);
//   };

//   return (
//     <div>
//       <header className="header">
//         <div className="header-1">
//           <a href="#" className="logo">
//             <i className="fas fa-book"></i> bookly
//           </a>

//           <form action="" className="search-form">
//             <input
//               type="search"
//               name=" "
//               placeholder="search here..."
//               id="search-box"
//             />
//             <label htmlFor="search-box" className="fas fa-search"></label>
//           </form>

//           <div className="icons">
//             <div id="search-btn" className="fas fa-search"></div>
//             <a href="#" className="fas fa-heart"></a>
//             <a href="#" className="fas fa-shopping-cart"></a>
//             <div id="login-btn" className="fas fa-user" onClick={handleUserIconClick}></div>
//           </div>
//         </div>

//         <div className="header-2">
//           <nav className="navbar">
//             <a href="#home">home</a>
//             <a href="#featured">featured</a>
//             <a href="#arrivals">arrivals</a>
//             <a href="#reviews">reviews</a>
//             <a href="#blogs">contact</a>

//             {/* Link for Genres with dropdown */}
//             <a href="#genres" onClick={toggleGenreDropdown}>genres</a>
//             {showGenreDropdown && (
//               <div className="genre-dropdown">
//                 <Genre />  {/* Genre dropdown component */}
//               </div>
//             )}
//           </nav>
//         </div>
//       </header>

//       {/* Forms for sign-in, sign-up, and customer info */}
//       <SignIn isActive={showSignIn} onClose={closeForms} onSignUpClick={handleSignUpClick} />
//       <SignUp isActive={showSignUp} onClose={closeForms} onCustomerClick={handleCustomerInfoClick} />
//       <CustomerInfo isActive={showCustomerInfo} onClose={closeForms} />
//     </div>
//   );
// };

// export default Header;







import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomerInfo from "./CustomerInfo";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showCustomerInfo, setShowCustomerInfo] = useState(false);

  const handleUserIconClick = () => {
    setShowSignIn(true);
    setShowSignUp(false);
    setShowCustomerInfo(false);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowSignIn(false);
    setShowCustomerInfo(false);
  };

  const handleCustomerInfoClick = () => {
    setShowCustomerInfo(true);
    setShowSignIn(false);
    setShowSignUp(false);
  };

  const closeForms = () => {
    setShowSignIn(false);
    setShowSignUp(false);
    setShowCustomerInfo(false);
  };

  return (
    <div>
      
      <header className="header">
        <div className="header-1">
          <a href="#" className="logo">
            <i className="fas fa-book"></i> bookly
          </a>

          <form action="" className="search-form">
            <input
              type="search"
              name=" "
              placeholder="search here..."
              id="search-box"
            />
            <label htmlFor="search-box" className="fas fa-search"></label>
          </form>

          <div className="icons">
            <div id="search-btn" className="fas fa-search"></div>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-shopping-cart"></a>
            <div id="login-btn" className="fas fa-user" onClick={handleUserIconClick}></div>
          </div>
        </div>

        <div className="header-2">
          <nav className="navbar">
            <Link to="/">home</Link>
            <Link to={'/genre'}>genre</Link>
            <a href="#featured">featured</a>
            <a href="#arrivals">arrivals</a>
            <a href="#reviews">reviews</a>
            <a href="#blogs">contact</a>
          </nav>
        </div>
      </header>

    
      <SignIn isActive={showSignIn} onClose={closeForms} onSignUpClick={handleSignUpClick} />
      <SignUp isActive={showSignUp} onClose={closeForms} onCustomerClick={handleCustomerInfoClick} />
      <CustomerInfo isActive={showCustomerInfo} onClose={closeForms} />
    </div>
  );
};

export default Header;