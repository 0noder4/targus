"use client";

import Head from "next/head";

export default function Home() {
  const dimensions = {
    h: 800, // width
    w: 1400, // height
    a: 20, // arc
    ut: {
      //upper top text
      w: 600,
      h: 80,
    },
    ub: {
      //upper bottom text
      w: 400,
      h: 80,
    },
    lt: {
      //lower top text
      w: 600,
      h: 80,
    },
    lb: {
      //lower bottom text
      w: 500,
      h: 80,
    },
  };
  return (
    <div>
      <Head>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <div>
        <svg width={`${dimensions.w}px`} height={`${dimensions.h}px`}>
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
            fill="red"
          />
        </svg>
      </div>
    </div>
  );
}
