// input_fields.tsx
import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  iconClass: string;
  placeholder: string;
  required?: boolean; // Optional 'required' prop
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
    <div className="input-field">
      <label className="label">{label}</label>
      <div className="icon">
        <i className={iconClass}></i>
      </div>
      <input
        type={type}
        name={name}
        className="input"
        onChange={handleInputChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputField;
