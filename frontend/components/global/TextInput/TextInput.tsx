import React from "react";
import styles from "./TextInput.module.scss";

interface Props {
  className?: string;
  label?: string;
  placeholder?: string;
  value: string;
  type?: "email" | "tel" | "text";
  variant?: "dark" | "light";
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
  variant = "light",
  id,
  name,
  onChange,
}: Props) => {
  return (
    <div
      className={`${styles.container} ${styles[variant]} ${className}`.trim()}
    >
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
