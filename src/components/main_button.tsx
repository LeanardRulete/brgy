import React from "react";

interface MainButtonProps {
  buttonText: string;
  type?: "button" | "submit" | "reset";
}

const MainButton: React.FC<MainButtonProps> = ({
  buttonText,
  type = "button",
}) => {
  return (
    <div className="custom-button-container">
      <button type={type} className="custom-main-button">
        {buttonText}
      </button>
    </div>
  );
};

export default MainButton;
