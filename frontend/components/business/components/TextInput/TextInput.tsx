import React from "react";
import "./TextInput.scss";

interface Props {
  className?: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const TextInput = ({
  className = "",
  label,
  value,
  placeholder,
  onChange,
}: Props) => {
  return (
    <div className={`itp-c-input--text ${className}`.trim()}>
      <label className="itp-c-input--text__label">{label}</label>
      <input
        className="itp-c-input--text__input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
};

export default TextInput;
