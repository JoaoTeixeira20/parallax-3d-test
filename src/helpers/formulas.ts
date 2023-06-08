export const parallax = (
  x: number,
  y: number,
  originX: number,
  originY: number
): { rotateX: number; rotateY: number } => {
  //fix for window variable access, since it's client-side we don't have immediate access to the window property
  try {
    const parallaxRes = [-(y - originY) / 20, (x - originX) / 20];
    return {
      rotateX: parallaxRes[0],
      rotateY: parallaxRes[1],
    };
  } catch (error) {
    return {
      rotateX: 0,
      rotateY: 0,
    };
  }
};

export const debounce = <T extends (...args: any[]) => void>(
  f: T,
  delay: number
) => {
  let timer: NodeJS.Timeout | null = null;
  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timer!);
    timer = setTimeout(() => f.apply(this, args), delay);
  };
};

export const asyncGetBoundingClientRect = (
  element: Element
): Promise<DOMRect> => {
  return new Promise((res) => {
    res(element.getBoundingClientRect());
  });
};
