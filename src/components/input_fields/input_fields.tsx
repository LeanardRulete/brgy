import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  iconClass: string;
  placeholder: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  handleInputChange,
  name,
  iconClass,
  placeholder,
  required = false,
}) => {
  return (
    <div className="custom-input-field">
      <label className="custom-label">{label}</label>
      <div className="custom-icon">
        <i className={iconClass}></i>
      </div>
      <input
        type={type}
        name={name}
        className="custom-input"
        onChange={handleInputChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputField;
