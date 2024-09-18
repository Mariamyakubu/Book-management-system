import React from "react";
import axios from "axios";

const SignIn = ({ isActive, onClose, onSignUpClick }) => {
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission

    const { email, password } = loginData; // Retrieve email and password from state

    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });

      console.log("Response:", response); // Debugging: log the response to see its content

      if (response.status === 200) {
        alert("Sign-in successful!");
        onClose(); // Close the form
        window.location.href = "/"; // Redirect user to homepage or another page
      } else {
        alert(`Invalid Credentials. Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error details:", error.response ? error.response.data : error.message);
      alert("Invalid Credentials. Please try again.");
    }
  };

  return (
    <div className={`login-form-container ${isActive ? "active" : ""}`}>
      <div id="close-login-btn" className="fas fa-times" onClick={onClose}></div>

      {/* Add `onSubmit` to the form */}
      <form onSubmit={handleSignInSubmit}>
        <h3>Sign in on Bookly's store</h3>
        <span>Email</span>
        <input
          type="email"
          className="box"
          placeholder="Enter your email"
          id="email"
          value={loginData.email}
          onChange={handleInputChange}
        />
        <span>Password</span>
        <input
          type="password"
          className="box"
          placeholder="Enter your password"
          id="password"
          value={loginData.password}
          onChange={handleInputChange}
        />
        <input type="submit" value="Sign in" className="btn" id="loginbtn" />
        <p>
          Forget password? <a href="#">Click here</a>
        </p>
        <p>
          Don't have an account?{" "}
          <a href="#" onClick={onSignUpClick}>
            Create one
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
