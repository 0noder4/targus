import React from "react";
import "./Checkbox.scss";

type Props = {
  className?: string;
  label?: string;
  onChange?: (value: boolean) => void;
};

const Checkbox = ({ className, label, onChange = (f) => f }: Props) => {
  return (
    <div className={`itp-c-input--checkbox ${className}`.trim()}>
      <input
        className="itp-c-input--checkbox__checkbox"
        type="checkbox"
        onChange={(e) => onChange(e.target.checked)}
        required
      />
      <label className="itp-c-input--checkbox__label">{label}</label>
    </div>
  );
};

export default Checkbox;
