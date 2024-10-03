import { useDimensions } from "@/hooks/useDimensions";
import React, { RefObject } from "react";

import "./Countdown.scss";

type Props = {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  ParentRef: RefObject<HTMLElement>;
  UTRef: RefObject<HTMLElement>;
  UBRef: RefObject<HTMLElement>;
};

const Countdown: React.FC<Props> = ({ timeLeft, ParentRef, UTRef, UBRef }) => {
  const parent = useDimensions(ParentRef);
  const ut = useDimensions(UTRef);
  const ub = useDimensions(UBRef);

  const width = parent.height - ut.height - ub.height;

  return (
    <div className="itp-c-countdown-container" style={{ width: width }}>
      <time className="itp-c-countdown">
        <div className="itp-l-stretch-text">
          ETA:{timeLeft.days}d|{timeLeft.hours}h|{timeLeft.minutes}m|
          {timeLeft.seconds}s
        </div>
      </time>
    </div>
  );
};

export default Countdown;
