import {
  animated,
  useSpring,
  config as springConfig,
  SpringValue,
} from '@react-spring/web';
import React, {
  PropsWithChildren,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { parallax } from '@/helpers/formulas';

const DISTANCE = 0;
const PERSPECTIVE = 600;

type ParallaxSceneProps = PropsWithChildren<{
  springProps: {
    gain: SpringValue<number>;
    spectrumList: SpringValue<any[]>;
  };
  onMouseOverHandler: () => void;
  onMouseOutHandler: () => void;
}>;

const ParallaxScene = (props: ParallaxSceneProps): ReactElement => {
  const [isOvering, setIsOvering] = useState<boolean>(false);

  const cubeRef = useRef<HTMLDivElement>(null);

  const cubePositionRef = useRef({
    cubeX: 0,
    cubeY: 0,
  })

  const spring = useSpring({
    backgroundColor: isOvering
      ? 'rgba(250, 204, 21,0.9)'
      : 'rgba(250, 204, 21,0.1)',
    scale: isOvering ? 1.3 : 1,
    borderRadius: isOvering ? '1%' : '50%',
    // scale: gain,
    // boxShadow: isOvering ? '0px -6px 13px 0px rgba(238, 255, 0, 0.75), inset 0px -6px 13px 0px rgba(251, 255, 0, 0.75)'
    // : '0px 0px 0px 0px rgba(238, 255, 0, 0.75), inset 0px 0px 0px 0px rgba(251, 255, 0, 0.75)',
    config: { ...springConfig.wobbly, clamp: true },
  });

  const scrollRef = useRef({ x: 0, y: 0 });

  const prevMouseCoords = useRef({
    x: 0,
    y: 0,
  });
  const [parallaxSpring, api] = useSpring(
    {
      rotateX: 0,
      rotateY: 0,
      config: { ...springConfig.wobbly, clamp: true }
    },
    []
  );

  const handleMouseMove = (event: MouseEvent) => {
    prevMouseCoords.current = { x: event.pageX, y: event.pageY };
    const { rotateX, rotateY } = parallax(
      event.pageX,
      event.pageY,
      cubePositionRef.current.cubeX,
      cubePositionRef.current.cubeY,
    );
    api.start({ rotateX, rotateY });
  };

  const handleScroll = () => {
    const scrollX = window.scrollX - scrollRef.current.x;
    const scrollY = window.scrollY - scrollRef.current.y;
    const { rotateX, rotateY } = parallax(
      scrollX + prevMouseCoords.current.x,
      scrollY + prevMouseCoords.current.y,
      cubePositionRef.current.cubeX,
      cubePositionRef.current.cubeY,
    );
    api.start({
      rotateX,
      rotateY,
    });
    prevMouseCoords.current = {
      x: prevMouseCoords.current.x + scrollX,
      y: prevMouseCoords.current.y + scrollY,
    };
    scrollRef.current = { x: window.scrollX, y: window.scrollY };
  };

  useEffect(() => {
    if (cubeRef.current && window) {
      const {
        x: left,
        y: top,
        width,
        height,
      } = cubeRef.current?.getBoundingClientRect();
      cubePositionRef.current = {
        cubeX: left + window.scrollX + width / 2,
        cubeY: top + window.scrollY + height / 2,
      }
    } else {
      console.error("couldn't set origin");
    }
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOver = useCallback(() => {
    props.onMouseOverHandler();
    setIsOvering(true);
  }, []);

  const handleOverOut = useCallback(() => {
    props.onMouseOutHandler();
    setIsOvering(false);
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
          // transform: 'rotateX(240deg) rotateY(-5deg) rotateZ(-155deg)',
          perspective: PERSPECTIVE,
          rotateX: parallaxSpring.rotateX,
          rotateY: parallaxSpring.rotateY,
          translate3d: ['0%', '0%', DISTANCE],
          scale: spring.scale,
        }}
      >
        <animated.div
          onMouseOver={handleOver}
          onMouseOut={handleOverOut}
          className="flex justify-center
          items-center
          text-3xl
          text
          font-bold
          outline
          outline-8
          border-none
          text-zinc-400"
          style={{
            //transform: isOvering ? 'translateZ(100px)' : `translateZ(${100*gain}px)`,
            // transform: `translateZ(${props.springProps.gain.to(
            //   [1, 2],
            //   [80, 120]
            // )}px) scale(0.85)`,
            translateZ: props.springProps.gain.to([1, 2], [80, 120]),
            scale: 0.85,
            // transform: `translateZ(${props.springProps.gain.to([1,2],[80,120])}}px)`,
            backgroundColor: spring.backgroundColor,
            // boxShadow: spring.boxShadow,
            outlineColor: props.springProps.gain.to(
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
            // boxShadow: '0px 0px 85px 34px rgba(0,0,0,0.76)',
          }}
        ></div>
        <div
          style={{
            transform: 'translateZ(-100px)',
            // boxShadow: '0px 0px 85px 34px rgba(0,0,0,0.76)',
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
