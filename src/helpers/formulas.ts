const DISTANCE = 50;
const PERSPECTIVE = 500;

export const parallax = (
  x: number,
  y: number,
  originX: number,
  originY: number,
  maxAngleDeg: number
): number[] => {
  //fix for window variable access, since it's client-side we don't have immediate access to the window property
  try {
    return [
      Math.max(Math.min(-(y - originY) / 20, maxAngleDeg), -maxAngleDeg),
      Math.max(Math.min((x - originX) / 20, maxAngleDeg), -maxAngleDeg),
    ];
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
  const originValue = originMaxValue - originMinValue;
  const destinationValue = destinationMaxValue - destinationMinValue;
  const calculation =
    ((value - originMinValue) * destinationValue) / originValue +
    destinationMinValue;
  return Math.max(
    Math.min(calculation, destinationMaxValue),
    destinationMinValue
  );
};

export function calculateXPosition(y: number, radius: number) {
  const xPosition = Math.sqrt(radius * radius - y * y);
  return xPosition;
}

export function calculateDistances(angleInDegrees: number, radius: number) {
  const angleInRadians = angleInDegrees * (Math.PI / 180);
  const xDistance = radius * Math.cos(angleInRadians);
  const yDistance = radius * Math.sin(angleInRadians);
  return { x: xDistance, y: yDistance };
}

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

export type cubSizeProps = {
  containerSize: number,
  cubeSize: number,
  bassScale: number[],
  bassOpacity: number[],
  springTrebleScaleSize: {
    start: number,
    end: number,
  },
  springGainInterpolationSize: {
    start: number,
    end: number,
  },
  textSize: number,
  ringContainerDistance: number,
  outLineRingWidth: number,
  originalSize: number,
  translateZSize: number,
  scrollMarginSize: number,
  distance: number,
  perspective: number,
}

export const cubeSizeCalculator = (
  containerSize: number,
  layout: 'desktop' | 'mobile'
): cubSizeProps => {
  const cubeSize = containerSize * (layout === 'mobile' ? 0.71 : 0.55);
  return {
    containerSize: containerSize,
    cubeSize,
    bassScale: [0.80, 0.95],
    bassOpacity: [0.4, 0.7],
    springTrebleScaleSize: {
      start: 0.8,
      end: 1,
    },
    springGainInterpolationSize: {
      start: (cubeSize / 2) * 1,
      end: (cubeSize / 2) * 1.4,
    },
    textSize: cubeSize * 0.15,
    ringContainerDistance: (cubeSize / 2) * 0.6,
    outLineRingWidth: cubeSize * 0.1,
    originalSize: cubeSize,
    translateZSize: cubeSize / 2,
    scrollMarginSize: containerSize / 2,
    distance: DISTANCE,
    perspective: PERSPECTIVE,
  };
};
