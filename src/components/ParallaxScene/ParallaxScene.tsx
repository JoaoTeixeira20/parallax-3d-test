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
import { parallax } from '@/helpers/formulas';

const DISTANCE = 0;
const PERSPECTIVE = 600;

type ParallaxSceneProps = PropsWithChildren<{
  snapScroll?: boolean;
  springRef: {
    gain: SpringValue<number>;
    spectrumList: SpringValue<any[]>;
  };
  mouseX: number;
  mouseY: number;
  cubeSize: number;
  onMouseOverHandler?: () => void;
  onMouseOutHandler?: () => void;
  onClickHandler: (event: SyntheticEvent<HTMLElement>) => void;
}>;

const ParallaxScene = (props: ParallaxSceneProps): ReactElement => {
  const cubeProps = useMemo(
    () => ({
      containerSize: props.cubeSize * 1.8,
      originalSize: props.cubeSize,
      translateZSize: props.cubeSize / 2,
      springGainInterpolationSize: {
        start: (props.cubeSize / 2) * 0.8,
        end: (props.cubeSize / 2) * 1.2,
      },
      textSize: props.cubeSize * 0.15,
      ringContainerDistance: (props.cubeSize / 2) * 0.6,
      outLineRingWidth: props.cubeSize * 0.05,
    }),
    [props.cubeSize]
  );
  const [{ cubeLeft, cubeTop, centerCubeX, centerCubeY }, setCubeCoords] =
    useState<{
      cubeLeft: number;
      cubeTop: number;
      centerCubeX: number;
      centerCubeY: number;
    }>({
      cubeLeft: 0,
      cubeTop: 0,
      centerCubeX: 0,
      centerCubeY: 0,
    });
  const [isOvering, setIsOvering] = useState<boolean>(false);

  const cubeRef = useRef<HTMLDivElement>(null);

  const spring = useSpring({
    ...parallax(props.mouseX, props.mouseY, centerCubeX, centerCubeY),
    backgroundColor: isOvering
      ? 'rgba(250, 204, 21,0.9)'
      : 'rgba(250, 204, 21,0.1)',
    scale: isOvering ? 1.3 : 1,
    borderRadius: isOvering ? '1%' : '50%',
    config: { ...springConfig.wobbly, clamp: true },
  });

  useEffect(() => {
    setTimeout(() => {
      if (cubeRef.current && window) {
        const {
          x: left,
          y: top,
          width,
          height,
        } = cubeRef.current?.getBoundingClientRect();
        setCubeCoords({
          cubeLeft: left,
          cubeTop: top,
          centerCubeX: left + window.scrollX + width / 2,
          centerCubeY: top + window.scrollY + height / 2,
        });
      } else {
        console.error("couldn't set origin");
      }
    }, 300);
  }, []);

  useEffect(() => {
    if (props.snapScroll === true) {
      window.scrollTo(0, centerCubeY - window.innerHeight / 2);
      setIsOvering(true);  
      return
    }
    setIsOvering(false);
  }, [props.snapScroll, centerCubeY]);

  const handleOver = useCallback(() => {
    props.onMouseOverHandler && props.onMouseOverHandler();
    setIsOvering(true);
  }, []);

  const handleOverOut = useCallback(() => {
    props.onMouseOutHandler && props.onMouseOutHandler();
    setIsOvering(false);
  }, []);

  const handleClick = useCallback(
    (event: SyntheticEvent<HTMLElement>) => {
      // window.scrollTo(0,centerCubeY-(window.innerHeight/2));
      props.onClickHandler(event);
    },
    [centerCubeY]
  );

  return (
    <div
      className="relative flex justify-center items-center"
      style={{
        width: cubeProps.containerSize,
        height: cubeProps.containerSize,
      }}
    >
      <animated.div
        ref={cubeRef}
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
          select-none"
          style={{
            translateZ: props.springRef.gain.to(
              [1, 2],
              [
                cubeProps.springGainInterpolationSize.start,
                cubeProps.springGainInterpolationSize.end,
              ]
            ),
            scale: 0.85,
            fontSize: cubeProps.textSize,
            backgroundColor: spring.backgroundColor,
            outlineWidth: cubeProps.outLineRingWidth,
            outlineColor: props.springRef.gain.to(
              [1, 2],
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
