import React from "react";
import "./TextInput.scss";

interface Props {
  className?: string;
  label?: string;
  placeholder?: string;
  value: string;
  type?: "email" | "tel" | "text";
  id?: string;
  name?: string;
  onChange: (value: string) => void;
}

const TextInput = ({
  className = "",
  label,
  value,
  placeholder,
  type = "text",
  id,
  name,
  onChange,
}: Props) => {
  return (
    <div className={`itp-c-input--text ${className}`.trim()}>
      <label className="itp-c-input--text__label">{label}</label>
      <input
        className="itp-c-input--text__input"
        type={type}
        placeholder={placeholder}
        value={value}
        id={id}
        name={name}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
};

export default TextInput;
