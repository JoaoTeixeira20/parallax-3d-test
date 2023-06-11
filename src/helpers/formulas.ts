export const parallax = (
  x: number,
  y: number,
  originX: number,
  originY: number,
  maxAngleDeg: number, 
): { rotateX: number; rotateY: number } => {
  //fix for window variable access, since it's client-side we don't have immediate access to the window property
  try {
    const parallaxRes = {
      rotateX: -(y - originY) / 20,
      rotateY: (x - originX) / 20,
    }
    return {
      rotateX: Math.max(Math.min(parallaxRes.rotateX, maxAngleDeg),-maxAngleDeg),
      rotateY: Math.max(Math.min(parallaxRes.rotateY, maxAngleDeg),-maxAngleDeg),
    };
  } catch (error) {
    return {
      rotateX: 0,
      rotateY: 0,
    };
  }
};

export const rangeConversion = (
  value: number,
  originMinValue: number,
  originMaxValue: number,
  destinationMinValue: number,
  destinationMaxValue: number
): number => {
  const originValue = (originMaxValue - originMinValue)  
  const destinationValue = (destinationMaxValue - destinationMinValue)  
  const calculation = (((value - originMinValue) * destinationValue) / originValue) + destinationMinValue
  return Math.max(Math.min(calculation, destinationMaxValue), destinationMinValue);
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
