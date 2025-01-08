"use client";

import { useDimensions } from "/hooks/useDimensions";
import React, { RefObject, useEffect, useState } from "react";

import "./HeroImage.scss";

interface Props {
  ParentRef: RefObject<HTMLElement>;
  UTRef: RefObject<HTMLElement>;
  UBRef: RefObject<HTMLElement>;
  LTRef: RefObject<HTMLElement>;
  LBRef: RefObject<HTMLElement>;
}

const HeroImage: React.FC<Props> = ({
  ParentRef,
  UTRef,
  UBRef,
  LTRef,
  LBRef,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const parent = useDimensions(ParentRef);
  const ut = useDimensions(UTRef);
  const ub = useDimensions(UBRef);
  const lt = useDimensions(LTRef);
  const lb = useDimensions(LBRef);

  useEffect(() => {
    if (parent.width > 0 && parent.height > 0) {
      setIsLoaded(true);
    }
  }, [parent]);

  if (!isLoaded) {
    return null; // or return a loading spinner
  }

  type Dimensions = {
    a: number;
    h: number;
    w: number;
    ut: {
      w: number;
      h: number;
    };
    ub: {
      w: number;
      h: number;
    };
    lt: {
      w: number;
      h: number;
    };
    lb: {
      w: number;
      h: number;
    };
  };

  const dimensions: Dimensions = {
    a: 20, // arc
    w: parent.width,
    h: parent.height,
    ut: { w: ut.width, h: ut.height },
    ub: { w: ub.width, h: ub.height },
    lt: { w: lt.width, h: lt.height },
    lb: { w: lb.width, h: lb.height },
  };

  return (
    <figure className="oedu-l-landing-mask">
      <svg width={`${dimensions.w}px`} height={`${dimensions.h}px`}>
        <mask id="mask-1">
          <path
            d={`
            M0,${dimensions.ut.h + dimensions.ub.h + dimensions.a}
            v${dimensions.h - dimensions.ut.h - dimensions.ub.h - 2 * dimensions.a}
            a${dimensions.a},${dimensions.a} 0 0 0 ${dimensions.a},${dimensions.a} 
            h${dimensions.w - dimensions.lb.w - 2 * dimensions.a}
            a${dimensions.a},${dimensions.a} 0 0 0 ${dimensions.a},-${dimensions.a} 
            v-${dimensions.lb.h - 2 * dimensions.a}
            a${dimensions.a},${dimensions.a} 0 0 0 -${dimensions.a},-${dimensions.a}
            h-${dimensions.lt.w - dimensions.lb.w - 2 * dimensions.a} 
            a${dimensions.a},${dimensions.a} 0 0 1 -${dimensions.a},-${dimensions.a}
            v-${dimensions.lt.h - 2 * dimensions.a}
            a${dimensions.a},${dimensions.a} 0 0 1 ${dimensions.a},-${dimensions.a}
            h${dimensions.lt.w - 2 * dimensions.a}
            a${dimensions.a},${dimensions.a} 0 0 0 ${dimensions.a},-${dimensions.a}
            v-${dimensions.h - dimensions.lt.h - dimensions.lb.h - 2 * dimensions.a}
            a${dimensions.a},${dimensions.a} 0 0 0 -${dimensions.a},-${dimensions.a}
            h-${dimensions.w - dimensions.ut.w - 2 * dimensions.a}
            a${dimensions.a},${dimensions.a} 0 0 0 -${dimensions.a},${dimensions.a}
            v${dimensions.ut.h - 2 * dimensions.a}
            a${dimensions.a},${dimensions.a} 0 0 1 -${dimensions.a},${dimensions.a}
            h-${dimensions.ut.w - dimensions.ub.w - 2 * dimensions.a}
            a${dimensions.a},${dimensions.a} 0 0 0 -${dimensions.a},${dimensions.a}
            v${dimensions.ub.h - 2 * dimensions.a}
            a${dimensions.a},${dimensions.a} 0 0 1 -${dimensions.a},${dimensions.a}
            h-${dimensions.ub.w - 2 * dimensions.a}
            a${dimensions.a},${dimensions.a} 0 0 0 -${dimensions.a},${dimensions.a}
          `}
            fill="white"
          />
        </mask>
        <image
          href="/images/image_front-cover.jpg"
          width={dimensions.w}
          className="itp-c-front-page-cover"
        />
      </svg>
    </figure>
  );
};

export default HeroImage;
