import React from "react";

interface MainButtonProps {
  buttonText: string;
  type?: "button" | "submit" | "reset"; // Add type prop for the button
}

const MainButton: React.FC<MainButtonProps> = ({
  buttonText,
  type = "button", // Default to "button" if not specified
}) => {
  return (
    <div>
      <button type={type} className="bg-blue-200 w-full">
        {buttonText}
      </button>
    </div>
  );
};

export default MainButton;
