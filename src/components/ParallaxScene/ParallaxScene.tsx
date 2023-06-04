import { animated, useSpring, config as springConfig } from '@react-spring/web';
import React, { ReactElement, useEffect, useRef, useState } from 'react';

const parallax = (
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

const DISTANCE = 0;
const PERSPECTIVE = 600;

const ParallaxScene = (): ReactElement => {
  const [{ x, y }, setMousePos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [{ cubeX, cubeY }, setCubeCoords] = useState<{
    cubeX: number;
    cubeY: number;
  }>({
    cubeX: 0,
    cubeY: 0,
  });
  const [isOvering, setIsOvering] = useState<boolean>(false);
  const scrollRef = useRef({ x: 0, y: 0 });

  const cubeRef = useRef<HTMLDivElement>(null);

  const spring = useSpring({
    ...parallax(x, y, cubeX, cubeY),
    backgroundColor: isOvering
      ? 'rgba(250, 204, 21,1)'
      : 'rgba(250, 204, 21,0)',
    scale: isOvering ? 1.2 : 1,
    boxShadow: isOvering ? '0px -6px 13px 0px rgba(238, 255, 0, 0.75), inset 0px -6px 13px 0px rgba(251, 255, 0, 0.75)'
    : '0px 0px 0px 0px rgba(238, 255, 0, 0.75), inset 0px 0px 0px 0px rgba(251, 255, 0, 0.75)',
    config: springConfig.wobbly,
  });

  useEffect(() => {
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
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => {
      console.log('you are messing with this');
    });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseMove = (event: MouseEvent) => {
    setMousePos({ x: event.pageX, y: event.pageY });
  };

  const handleScroll = () => {
    const scrollX = window.scrollX - scrollRef.current.x;
    const scrollY = window.scrollY - scrollRef.current.y;
    setMousePos(({ x, y }) => ({
      x: x + scrollX,
      y: y + scrollY,
    }));
    scrollRef.current = { x: window.scrollX, y: window.scrollY };
  };

  const handleOver = () => {
    setIsOvering(true);
  };

  const handleOverOut = () => {
    setIsOvering(false);
  };

  return (
    <div className="relative flex justify-center items-center w-96 bg-slate-800 h-96">
      {/* <div
        style={{
          position: 'absolute',
          translate: '0, 0, -200px',
          backgroundColor: 'black',
          width: '300px',
          height: '300px',
        }}
      ></div> */}
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
          rotateX: spring.rotateX,
          rotateY: spring.rotateY,
          translate3d: ['0%', '0%', DISTANCE],
          scale: spring.scale,
        }}
      >
        <animated.div
          onMouseOver={handleOver}
          onMouseOut={handleOverOut}
          className='flex justify-center items-center text-xl text font-bold'
          style={{
            transform: 'translateZ(100px)',
            backgroundColor: spring.backgroundColor,
            boxShadow: spring.boxShadow,
          }}
        >hello</animated.div>
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
