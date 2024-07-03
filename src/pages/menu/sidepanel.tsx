import React from "react";
import "../../style/sidepanel.css";
import logoImage from "../../assets/logopic.png";

const SidePanel: React.FC = () => {
  return (
    <div className="sidepanel-container">
      <div className="button-container">
      <img src={logoImage} alt="Logo" className="custom-form-image" />
        <h4 className="location">Poblacion 2</h4>
        <h4 className="location">Tagbilaran City</h4>
        <h2>MENU</h2>
        <button className="sidepanel-button">Dashboard</button>
        <button className="sidepanel-button">Household</button>
        <button className="sidepanel-button">Account</button>
        <button className="sidepanel-button">Print Certificate</button>
        <button className="sidepanel-button">QR Code Attendance</button>
        <button className="sidepanel-button">System Settings</button>
        <button className="sidepanel-button">Log Out</button>
      </div>
      <div className="content-container">
        <h1>Welcome to the Side Panel</h1>
        {/* Additional content can go here */}
      </div>
    </div>
  );
};

export default SidePanel;
