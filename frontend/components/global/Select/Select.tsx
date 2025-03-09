import React, { useState } from "react";

import styles from "./Select.module.scss";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  onChange: (selectedValue: string) => void;
  className?: string;
  label?: string;
  variant?: "dark" | "light";
  id?: string;
  placeholder?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  onChange,
  variant = "light",
  className,
  id,
  label,
  placeholder,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <div className={`${styles.container} ${styles[variant]} ${className}`}>
      <label className={styles.label}>{label}</label>
      <select
        className={styles.input}
        value={selectedValue}
        onChange={handleChange}
        id={id}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
