import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/input_fields/input_fields";
import "../../style/log_in.css";
import brgyImage from "../../assets/brgy.jpg";
import logoImage from "../../assets/logopic.png";
import MainButton from "../../components/main_button";

const Login: React.FC = () => {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userData.username || !userData.password) {
      alert("Please enter both username and password.");
      return;
    }
    console.log("Username:", userData.username);
    console.log("Password:", userData.password);
    navigate("/sidepanel");
  };

  return (
    <div className="login-container">
      <div className="left-half">
        <img src={brgyImage} alt="Login Image" className="background-image" />
      </div>
      <div className="right-half">
        <div className="login-form">
          <img src={logoImage} alt="Logo" className="form-image" />
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <InputField
              label="Username*"
              type="text"
              handleInputChange={handleInputChange}
              name="username"
              iconClass="fas fa-user"
              placeholder="Enter your username"
              required
            />
            <InputField
              label="Password*"
              type="password"
              handleInputChange={handleInputChange}
              name="password"
              iconClass="fas fa-lock"
              placeholder="Enter your Password"
              required
            />
            <div className="button-container">
              <MainButton buttonText="Log in" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
