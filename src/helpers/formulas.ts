export const parallax = (
  x: number,
  y: number,
  originX: number,
  originY: number,
  maxAngleDeg: number, 
): number[] => {
  //fix for window variable access, since it's client-side we don't have immediate access to the window property
  try {
    return [Math.max(Math.min(-(y - originY) / 20, maxAngleDeg),-maxAngleDeg),
      Math.max(Math.min((x - originX) / 20, maxAngleDeg),-maxAngleDeg)];
  } catch (error) {
    return [0, 0];
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
