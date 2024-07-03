import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/input_fields/input_fields";
import MainButton from "../../components/main_button";
import "../../style/log_in.css";
import brgyImage from "../../assets/brgy.jpg";
import logoImage from "../../assets/logopic.png";

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
    <div className="custom-login-container">
      <div className="custom-left-half">
        <img src={brgyImage} alt="Login Image" className="custom-background-image" />
      </div>
      <div className="custom-right-half">
        <div className="custom-login-form">
          <img src={logoImage} alt="Logo" className="custom-form-image" />
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <InputField
              label="Username"
              type="text"
              handleInputChange={handleInputChange}
              name="username"
              iconClass="fas fa-user"
              placeholder="Enter your username"
              required
            />
            <InputField
              label="Password"
              type="password"
              handleInputChange={handleInputChange}
              name="password"
              iconClass="fas fa-lock"
              placeholder="Enter your Password"
              required
            />
            <MainButton buttonText="Log in" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
