import { animated, useSpring, config as springConfig, SpringValue } from '@react-spring/web';
import React, {
  PropsWithChildren,
  ReactElement,
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { parallax } from '@/helpers/formulas';

const DISTANCE = 0;
const PERSPECTIVE = 600;

type ParallaxSceneProps = PropsWithChildren<{
  springRef: {
    gain: SpringValue<number>;
    spectrumList: SpringValue<any[]>;
  };
  mouseX: number;
  mouseY: number;
  onMouseOverHandler: () => void;
  onMouseOutHandler: () => void;
  onClickHandler: (event: SyntheticEvent<HTMLElement>) => void;
  routerIndex: number;
}>;

const ParallaxScene = (props: ParallaxSceneProps): ReactElement => {
  const [{ cubeX, cubeY }, setCubeCoords] = useState<{
    cubeX: number;
    cubeY: number;
  }>({
    cubeX: 0,
    cubeY: 0,
  });
  const [isOvering, setIsOvering] = useState<boolean>(false);

  const cubeRef = useRef<HTMLDivElement>(null);

  const spring = useSpring({
    ...parallax(props.mouseX, props.mouseY, cubeX, cubeY),
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
        cubeX: left + window.scrollX + width / 2,
        cubeY: top + window.scrollY + height / 2,
      });
    } else {
      console.error("couldn't set origin");
    }
  },200);
  }, []);

  const handleOver = useCallback(() => {
    props.onMouseOverHandler();
    setIsOvering(true);
  }, []);

  const handleOverOut = useCallback(() => {
    props.onMouseOutHandler();
    setIsOvering(false);
  }, []);

  const handleClick = useCallback((event: SyntheticEvent<HTMLElement>) => {
    props.onClickHandler(event);
  }, []);

  return (
    <div className="relative flex justify-center items-center w-96 h-96">
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
          width: '200px',
          height: '200px',
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
          text-3xl
          text
          font-bold
          outline
          outline-8
          border-none
          text-zinc-400
          cursor-pointer
          select-none"
          style={{
            translateZ: props.springRef.gain.to([1, 2], [80, 120]),
            scale: 0.85,
            backgroundColor: spring.backgroundColor,
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
            transform: 'translateZ(60px)',
            background:
              'radial-gradient(circle, rgb(165 243 252), rgb(22 78 99))',
          }}
        ></div>
        <div
          style={{
            transform: 'translateZ(-100px)',
          }}
        ></div>
        <div
          style={{
            transform: 'rotateY(90deg) translateZ(100px)',
          }}
        ></div>
        <div
          style={{
            transform: 'rotateY(-90deg) translateZ(100px)',
          }}
        ></div>
        <div
          style={{
            transform: 'rotateX(90deg) translateZ(100px)',
          }}
        ></div>
        <div
          style={{
            transform: 'rotateX(-90deg) translateZ(100px)',
          }}
        ></div>
      </animated.div>
    </div>
  );
};

export default ParallaxScene;
