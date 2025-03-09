import React from "react";
import styles from "./TextInput.module.scss";

interface Props {
  onChange: (value: string) => void;
  value: string;
  className?: string;
  label?: string;
  placeholder?: string;
  type?: "email" | "tel" | "text";
  variant?: "dark" | "light";
  id?: string;
  name?: string;
}

const TextInput = ({
  value,
  onChange,
  type = "text",
  variant = "light",
  className,
  label,
  placeholder,
  id,
  name,
}: Props) => {
  return (
    <div className={`${styles.container} ${styles[variant]} ${className}`}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
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
