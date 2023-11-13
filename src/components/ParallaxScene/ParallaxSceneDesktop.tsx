import React, { SyntheticEvent, useCallback, useEffect, useRef } from 'react';
import { ParallaxSceneContainerProps } from "./parallaxSceneType";
import { animated } from '@react-spring/web';
import ParallaxSceneFace from './ParallaxSceneFace';
import { parallax } from '@/helpers/formulas';

const ParallaxSceneDesktop = (props: ParallaxSceneContainerProps) => {

  const scrollRef = useRef([0, 0]);
  const prevMouseCoords = useRef([0, 0]);
  const elementCenterPos = useRef([0, 0]);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    prevMouseCoords.current = [event.pageX, event.pageY];
    const [rotateX, rotateY] = parallax(
      event.pageX,
      event.pageY,
      elementCenterPos.current[0],
      elementCenterPos.current[1],
      45
    );
    props.api.start({
      rotateX,
      rotateY,
    });
  }, []);

  const handleScroll = useCallback(() => {
    const scrollX = window.scrollX - scrollRef.current[0];
    const scrollY = window.scrollY - scrollRef.current[1];
    prevMouseCoords.current = [
      scrollX + prevMouseCoords.current[0],
      scrollY + prevMouseCoords.current[1],
    ];
    const [rotateX, rotateY] = parallax(
      prevMouseCoords.current[0],
      prevMouseCoords.current[1],
      elementCenterPos.current[0],
      elementCenterPos.current[1],
      45
    );
    scrollRef.current = [window.scrollX, window.scrollY];
    props.api.start({
      rotateX,
      rotateY,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (props.elementRef.current) {
        const { left, top } = props.elementRef.current.getBoundingClientRect();
        elementCenterPos.current = [
          left + window.scrollX + props.cubeProps.containerSize / 2,
          top + window.scrollY + props.cubeProps.containerSize / 2,
        ];
        scrollRef.current = [window.scrollX, window.scrollY];
      }
      prevMouseCoords.current = [
        elementCenterPos.current[0],
        elementCenterPos.current[1],
      ];

      const [rotateX, rotateY] = parallax(
        prevMouseCoords.current[0],
        prevMouseCoords.current[1],
        elementCenterPos.current[0],
        elementCenterPos.current[1],
        45
      );
      props.api.start({
        rotateX,
        rotateY,
      });
    }, 300);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOver = useCallback(() => {
    props.onMouseOverHandler && props.onMouseOverHandler();
    props.setActive();
  }, []);

  const handleOverOut = useCallback(() => {
    props.onMouseOutHandler && props.onMouseOutHandler();
    props.setInactive();
  }, []);

  const handleClick = useCallback((event: SyntheticEvent<HTMLElement>) => {
    props.onClickHandler(event);
  }, []);

  const propsToPass = {
    ...props,
    handleOver,
    handleOverOut,
    handleClick,
  }

  return (
    <>
      <animated.div
        className="relative flex justify-center items-center"
        style={{
          width: props.cubeProps.containerSize,
          height: props.cubeProps.containerSize,
          scale: props.springRef.bassGain.to([0, 1], [0.9, 1]),
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
            width: `${props.cubeProps.originalSize}px`,
            height: `${props.cubeProps.originalSize}px`,
            transformStyle: 'preserve-3d',
            perspective: props.cubeProps.perspective,
            rotateX: props.spring.rotateX,
            rotateY: props.spring.rotateY,
            translate3d: ['0%', '0%', props.cubeProps.distance],
            scale: props.spring.scale,
          }}
        >
          <ParallaxSceneFace
            {...propsToPass}
          >
            {props.children}
          </ParallaxSceneFace>
          <div
            className="border-none"
            style={{
              transform: `translateZ(${props.cubeProps.ringContainerDistance}px)`,
              background:
                'radial-gradient(circle, rgb(165 243 252), rgb(22 78 99))',
            }}
          ></div>
          <div
            style={{
              transform: `translateZ(-${props.cubeProps.translateZSize}px)`,
            }}
          ></div>
          <div
            style={{
              transform: `rotateY(90deg) translateZ(${props.cubeProps.translateZSize}px)`,
            }}
          ></div>
          <div
            style={{
              transform: `rotateY(-90deg) translateZ(${props.cubeProps.translateZSize}px)`,
            }}
          ></div>
          <div
            style={{
              transform: `rotateX(90deg) translateZ(${props.cubeProps.translateZSize}px)`,
            }}
          ></div>
          <div
            style={{
              transform: `rotateX(-90deg) translateZ(${props.cubeProps.translateZSize}px)`,
            }}
          ></div>
        </animated.div>
      </animated.div>
    </>
  );
};

export default ParallaxSceneDesktop;
