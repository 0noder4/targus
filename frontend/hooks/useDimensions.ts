import { RefObject, useState, useEffect, useCallback } from "react";

interface Dimensions {
  width: number;
  height: number;
}

export function useDimensions(ref: RefObject<HTMLElement | null>): Dimensions {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  const updateDimensions = useCallback(() => {
    if (ref.current) {
      setDimensions({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    }
  }, [ref]);

  useEffect(() => {
    updateDimensions();

    const tempRef = ref.current;

    const resizeObserver = new ResizeObserver(updateDimensions);
    if (tempRef) {
      resizeObserver.observe(tempRef);
    }

    return () => {
      if (tempRef) {
        resizeObserver.unobserve(tempRef);
      }
    };
  }, [ref, updateDimensions]);

  return dimensions;
}
