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
