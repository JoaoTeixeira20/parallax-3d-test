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
import useMeasure from '@/hooks/useMeasure';

const DISTANCE = 0;
const PERSPECTIVE = 600;

type ParallaxSceneProps = PropsWithChildren<{
  active?: boolean;
  springRef: {
    bassGain: SpringValue<number>;
    trebleGain: SpringValue<number>;
  };
  cubeSize: number;
  mobileBehaviour?: boolean;
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
      outLineRingWidth: props.cubeSize * 0.1,
      scrollMarginSize: props.cubeSize * 0.9,
    }),
    [props.cubeSize]
  );

  const [ref, bounds] = useMeasure({ scroll: true });
  const [isActive, setIsActive] = useState<boolean | null>(null);

  const cubeRef = useRef<HTMLDivElement>(null);

  const { centerX, centerY } = useMemo(
    () => ({
      centerX: bounds.left + bounds.width / 2,
      centerY: bounds.top + bounds.height / 2,
    }),
    [bounds]
  );

  const [focusSpring, api] = useSpring(
    {
      rotateX: 0,
      rotateY: 0,
      config: { ...springConfig.wobbly, clamp: true },
    },
    []
  );

  const spring = useSpring({
    backgroundColor: isActive
      ? 'rgba(250, 204, 21,0.9)'
      : 'rgba(250, 204, 21,0.1)',
    scale: isActive ? 1.3 : 1,
    borderRadius: isActive ? '1%' : '50%',
    config: { ...springConfig.wobbly, clamp: true },
  });

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      api.start(parallax(event.clientX, event.clientY, centerX, centerY, 45));
    },
    [bounds]
  );

  useEffect(() => {
    if (props.mobileBehaviour) {
      const screenY = window.innerHeight / 2;
      const scrollTo = Math.abs(screenY - centerY) < cubeProps.scrollMarginSize;
      if (scrollTo) {
        setIsActive(true);
        return;
      }
      setIsActive(false);
      return;
    }
  }, [bounds]);

  useEffect(() => {
    if (props.mobileBehaviour) {
      api.start(
        parallax(
          window.innerWidth / 2,
          window.innerHeight / 2,
          centerX,
          centerY,
          45
        )
      );
    }
    !props.mobileBehaviour && window.addEventListener('mousemove', handleMouseMove);
    return () => {
      !props.mobileBehaviour && window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [bounds]);

  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }, []);

  const handleOver = useCallback(() => {
    props.onMouseOverHandler && props.onMouseOverHandler();
    !props.mobileBehaviour && setIsActive(true);
  }, []);

  const handleOverOut = useCallback(() => {
    props.onMouseOutHandler && props.onMouseOutHandler();
    !props.mobileBehaviour && setIsActive(false);
  }, []);

  const handleClick = useCallback(
    (event: SyntheticEvent<HTMLElement>) => {
      // window.scrollTo(0,centerCubeY-(window.innerHeight/2));
      if (!isActive && props.mobileBehaviour) {
        cubeRef.current?.scrollIntoView({ block: 'center' });
        return;
      }
      props.onClickHandler(event);
    },
    [isActive]
  );

  return (
    <div
      ref={ref}
      className="relative flex justify-center items-center"
      style={{
        width: cubeProps.containerSize,
        height: cubeProps.containerSize,
      }}
    >
      {/* <div className='absolute z-10 pointer-events-none'>
        {Object.keys(bounds).map((key) => (
          <div key={key}>
            <span>{key}</span>
            <span>{bounds[key]}</span>
          </div>
        ))}
      </div> */}
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
          rotateX: focusSpring.rotateX,
          rotateY: focusSpring.rotateY,
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
