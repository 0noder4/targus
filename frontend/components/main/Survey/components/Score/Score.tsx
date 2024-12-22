import React from "react";

import "./Score.scss";

interface Props {
  current: number;
  max?: number;
  label?: string;
}

const Score: React.FC<Props> = ({ current, max = 100, label }) => {
  const validatedCurrent = Math.min(Math.max(0, current), max);
  const percentage = (validatedCurrent / max) * 100;

  return (
    <div className="itp-c-score_container">
      <label className="itp-c-score__label">{label}</label>
      <label className="itp-c-score__value">
        {validatedCurrent}/{max}
      </label>
      <div className="itp-c-score">
        <div
          className="itp-c-score__fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default Score;
