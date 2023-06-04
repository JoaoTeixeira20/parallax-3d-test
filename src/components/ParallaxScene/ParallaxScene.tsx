import { animated, useSpring, config as springConfig } from '@react-spring/web';
import React, { ReactElement, useEffect, useRef, useState, MouseEvent as ReactMouseEvent } from 'react';

const parallax = (
  x: number,
  y: number,
  originX: number,
  originY: number,
  distance: number
): string => {
  //fix for window variable access, since it's client-side we don't have immediate access to the window property
  try {
    const parallaxRes = [-(y - originY) / 20, (x - originX) / 20];
    return `perspective(600px) rotateX(${parallaxRes[0]}deg) rotateY(${parallaxRes[1]}deg) translate3D(0%,0%,${distance}px)`;
  } catch (error) {
    return ``;
  }
};

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
    transform: parallax(x, y, cubeX, cubeY, 0),
    backgroundColor: isOvering ? 'rgba(250, 204, 21,1)' : 'rgba(250, 204, 21,0)',
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
      console.error('couldn\'t set origin');
    }
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
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
  }

  const handleOverOut = () => {
    setIsOvering(false);
  }

  return (
    <div
      className="relative flex justify-center items-center w-96 bg-slate-800 h-96"
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
        [&>div]:border-cyan-900
        [&>div]:rounded-md"
        style={{
          width: '200px',
          height: '200px',
          transformStyle: 'preserve-3d',
          // transform: 'rotateX(240deg) rotateY(-5deg) rotateZ(-155deg)',
          transform: spring.transform,
        }}
      >
        <animated.div
          onMouseOver={handleOver}
          onMouseOut={handleOverOut}
          style={{
            transform: 'translateZ(100px)',
            backgroundColor: spring.backgroundColor,
          }}
        ></animated.div>
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
