import {
  animated,
  useSpring,
  config as springConfig,
  SpringValue,
} from '@react-spring/web';
import React, {
  PropsWithChildren,
  ReactElement,
  SyntheticEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { cubeSizeCalculator, parallax } from '@/helpers/formulas';

const DISTANCE = 0;
const PERSPECTIVE = 600;

type ParallaxSceneProps = PropsWithChildren<{
  active?: boolean;
  springRef: {
    bassGain: SpringValue<number>;
    trebleGain: SpringValue<number>;
  };
  centerCoords: number[];
  containerSize: number;
  mobileBehaviour?: boolean;
  onMouseOverHandler?: () => void;
  onMouseOutHandler?: () => void;
  onClickHandler: (event: SyntheticEvent<HTMLElement>) => void;
}>;

const ParallaxScene = (props: ParallaxSceneProps): ReactElement => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [elementCenterPos, setElementCenterPos] = useState({
    left: 0,
    top: 0,
  });
  const cubeProps = useMemo(
    () => cubeSizeCalculator(props.containerSize, 'desktop'),
    [props.containerSize]
  );

  const [isActive, setIsActive] = useState<boolean | null>(null);

  const parallaxCoords = useMemo(
    () =>
      parallax(
        props.centerCoords[0],
        props.centerCoords[1],
        elementCenterPos.left,
        elementCenterPos.top,
        45
      ),
    [props.centerCoords, elementCenterPos]
  );

  const spring = useSpring(
    {
      rotateX: parallaxCoords[0],
      rotateY: parallaxCoords[1],
      backgroundColor: isActive
        ? 'rgba(250, 204, 21,0.9)'
        : 'rgba(250, 204, 21,0.1)',
      scale: isActive ? 1.3 : 1,
      borderRadius: isActive ? '1%' : '50%',
      config: { ...springConfig.wobbly, clamp: true },
    }
  );

  useEffect(() => {
    setTimeout(() => {
      if (elementRef.current) {
        const { top, left, width, height } =
          elementRef.current.getBoundingClientRect();
        setElementCenterPos({
          left: left + window.scrollX + width / 2,
          top: top + window.scrollY + height / 2,
        });
      }
    }, 300);
  }, []);

  const handleOver = useCallback(() => {
    props.onMouseOverHandler && props.onMouseOverHandler();
    setIsActive(true);
  }, []);

  const handleOverOut = useCallback(() => {
    props.onMouseOutHandler && props.onMouseOutHandler();
    setIsActive(false);
  }, []);

  const handleClick = useCallback(
    (event: SyntheticEvent<HTMLElement>) => {
      props.onClickHandler(event);
    },
    []
  );

  return (
    <div
      ref={elementRef}
      className="relative flex justify-center items-center"
      style={{
        width: cubeProps.containerSize,
        height: cubeProps.containerSize,
      }}
    >
      <animated.div
        className="
        relative
        [&>div]:absolute 
        [&>div]:w-full 
        [&>div]:h-full 
        [&>div]:opacity-80 
        [&>div]:border 
        [&>div]:border-cyan-600
        [&>div]:rounded-md
        [&>div]:bg-cyan-900"
        style={{
          width: `${cubeProps.originalSize}px`,
          height: `${cubeProps.originalSize}px`,
          transformStyle: 'preserve-3d',
          perspective: PERSPECTIVE,
          rotateX: spring.rotateX,
          rotateY: spring.rotateY,
          translate3d: ['0%', '0%', DISTANCE],
          scale: spring.scale,
        }}
      >
        <animated.div
          onMouseOver={handleOver}
          onMouseOut={handleOverOut}
          onClick={handleClick}
          className="flex justify-center
          items-center
          text
          font-bold
          outline
          border-none
          text-zinc-400
          cursor-pointer
          select-none
          backdrop-blur-sm"
          style={{
            translateZ: props.springRef.trebleGain.to(
              [0, 1],
              [
                cubeProps.springGainInterpolationSize.start,
                cubeProps.springGainInterpolationSize.end,
              ]
            ),
            scale: 0.85,
            fontSize: cubeProps.textSize,
            backgroundColor: spring.backgroundColor,
            outlineWidth: props.springRef.bassGain.to(
              [0, 1],
              [cubeProps.outLineRingWidth / 2, cubeProps.outLineRingWidth * 1.2]
            ),
            outlineColor: props.springRef.bassGain.to(
              [0, 1],
              ['rgb(165 243 252)', 'rgb(22 78 99)']
            ),
            borderRadius: spring.borderRadius,

            textShadow:
              '-1px -1px 0 rgb(23,23,23),  1px -1px 0 rgb(23,23,23),-1px 1px 0 rgb(23,23,23),1px 1px 0 rgb(23,23,23)',
          }}
        >
          {props.children}
        </animated.div>
        <div
          className="border-none"
          style={{
            transform: `translateZ(${cubeProps.ringContainerDistance}px)`,
            background:
              'radial-gradient(circle, rgb(165 243 252), rgb(22 78 99))',
          }}
        ></div>
        <div
          style={{
            transform: `translateZ(-${cubeProps.translateZSize}px)`,
          }}
        ></div>
        <div
          style={{
            transform: `rotateY(90deg) translateZ(${cubeProps.translateZSize}px)`,
          }}
        ></div>
        <div
          style={{
            transform: `rotateY(-90deg) translateZ(${cubeProps.translateZSize}px)`,
          }}
        ></div>
        <div
          style={{
            transform: `rotateX(90deg) translateZ(${cubeProps.translateZSize}px)`,
          }}
        ></div>
        <div
          style={{
            transform: `rotateX(-90deg) translateZ(${cubeProps.translateZSize}px)`,
          }}
        ></div>
      </animated.div>
    </div>
  );
};

export default ParallaxScene;
