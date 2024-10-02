"use client";

import { useDimensions } from "@/hooks/useDimensions";
import React, { RefObject } from "react";
import "./Mask.scss";

interface Props {
  ParentRef: RefObject<HTMLElement>;
  UTRef: RefObject<HTMLElement>;
  UBRef: RefObject<HTMLElement>;
  LTRef: RefObject<HTMLElement>;
  LBRef: RefObject<HTMLElement>;
}

const Mask: React.FC<Props> = ({ ParentRef, UTRef, UBRef, LTRef, LBRef }) => {
  const { width, height } = useDimensions(ParentRef);
  const { width: UTwidth, height: UTheight } = useDimensions(UTRef);
  const { width: UBwidth, height: UBheight } = useDimensions(UBRef);
  const { width: LTwidth, height: LTheight } = useDimensions(LTRef);
  const { width: LBwidth, height: LBheight } = useDimensions(LBRef);

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
    w: width,
    h: height,
    ut: {
      w: UTwidth,
      h: UTheight,
    },
    ub: {
      w: UBwidth,
      h: UBheight,
    },
    lt: {
      w: LTwidth,
      h: LTheight,
    },
    lb: {
      w: LBwidth,
      h: LBheight,
    },
  };

  return (
    <figure className="oedu-l-landing-mask">
      <svg width={`${dimensions.w}px`} height={`${dimensions.h}px`}>
        <defs>
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
        </defs>
        <image
          href="/images/image_front-cover.jpg"
          className="itp-c-front-page-cover"
        />
      </svg>
    </figure>
  );
};

export default Mask;
