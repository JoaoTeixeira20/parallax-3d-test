import { cubSizeProps } from '@/helpers/formulas';
import { SpringRef, SpringValue } from '@react-spring/web';
import { MutableRefObject, PropsWithChildren, SyntheticEvent } from 'react';

export type ParallaxSceneProps = PropsWithChildren<{
  springRef: {
    bassGain: SpringValue<number>;
    trebleGain: SpringValue<number>;
  };
  containerSize: number;
  onMouseOverHandler?: () => void;
  onMouseOutHandler?: () => void;
  onClickHandler: (event: SyntheticEvent<HTMLElement>) => void;
  invertedBass?: boolean;
  isMobile: boolean;
  active?: boolean;
}>;

export type ParallaxSceneContainerProps = ParallaxSceneProps & {
  handleOver?: () => void;
  handleOverOut?: () => void;
  handleClick?: (event: SyntheticEvent<HTMLElement>) => void;
  cubeProps: cubSizeProps;
  spring: ParallaxSceneSrpingProps;
  api: SpringRef<ParallaxSceneSrpingPropsApi>;
  elementRef: MutableRefObject<HTMLDivElement | null>;
  setActive: () => void,
  setInactive: () => void,
};

export type ParallaxSceneSrpingProps = {
  rotateX: SpringValue<number>;
  rotateY: SpringValue<number>;
  scale: SpringValue<number>;
  borderRadius: SpringValue<string | number>;
  opacity: SpringValue<number>;
  rotate: SpringValue<string | number>;
};

export type ParallaxSceneSrpingPropsApi = {
    rotateX: number;
    rotateY: number;
    rotate: string | number;
    scale: number;
    borderRadius: string | number;
    opacity: number,
  };