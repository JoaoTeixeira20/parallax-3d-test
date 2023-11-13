import React, { ReactElement } from 'react';
import { animated } from '@react-spring/web';
import { ParallaxSceneContainerProps } from './parallaxSceneType';

const ParallaxSceneFace = (
  props: ParallaxSceneContainerProps
): ReactElement => {
  console.log(props.invertedBass);

  return (
    <>
      <animated.div
        onMouseOver={props.handleOver}
        onMouseOut={props.handleOverOut}
        onClick={props.handleClick}
        className="flex justify-center
    items-center
    text
    font-bold
    border-none
    text-zinc-400
    cursor-pointer
    select-none
    bg-transparent
    "
        style={{
          translateZ: props.springRef.trebleGain.to(
            [0, 1],
            [
              props.cubeProps.springGainInterpolationSize.start,
              props.cubeProps.springGainInterpolationSize.end,
            ]
          ),
          // scale: 0.85,
          scale: !props.invertedBass
            ? props.springRef.bassGain.to([0, 1], props.cubeProps.bassScale)
            : props.cubeProps.bassScale[1],
          fontSize: props.cubeProps.textSize,
          // backgroundColor: spring.backgroundColor,
          // outlineWidth: props.springRef.bassGain.to(
          //   [0, 1],
          //   [cubeProps.outLineRingWidth / 2, cubeProps.outLineRingWidth * 1.2]
          // ),
          // outlineColor: themeColors.neonTheme.outlineFinal,
          opacity: props.springRef.bassGain.to(
            [0, 1],
            !props.invertedBass
              ? props.cubeProps.bassOpacity
              : props.cubeProps.bassOpacity.reverse()
          ),
          borderRadius: props.spring.borderRadius,
          rotate: props.spring.rotate,
          // clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)",

          textShadow:
            '-1px -1px 0 rgb(23,23,23),  1px -1px 0 rgb(23,23,23),-1px 1px 0 rgb(23,23,23),1px 1px 0 rgb(23,23,23)',
          willChange: 'transform, opacity',
        }}
      ></animated.div>
      <animated.div
        className="absolute flex justify-center items-center font-bold text-zinc-400 pointer-events-none border-none !bg-neonTheme-innerCubeColor"
        style={{
          translateZ: props.springRef.trebleGain.to(
            [0, 1],
            [
              props.cubeProps.springGainInterpolationSize.start,
              props.cubeProps.springGainInterpolationSize.end,
            ]
          ),
          // scale: props.springRef.bassGain.to([0,1],[0.7,0.8]),
          scale: !props.invertedBass
            ? props.cubeProps.bassScale[0] - 0.05
            : props.springRef.bassGain.to([0, 1], props.cubeProps.bassScale),
          borderRadius: props.spring.borderRadius,
          // clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)",
          fontSize: props.cubeProps.textSize,
          // backgroundColor: props.spring.backgroundColor,
          opacity: props.spring.opacity,
          // outlineWidth: cubeProps.outLineRingWidth / 2,
          // outlineColor: 'transparent',
          rotate: props.spring.rotate,
          willChange: 'transform, opacity',
        }}
      />
      <animated.div
        className="absolute flex justify-center items-center font-bold text-zinc-400 pointer-events-none border-none !bg-transparent"
        style={{
          translateZ: props.springRef.trebleGain.to(
            [0, 1],
            [
              props.cubeProps.springGainInterpolationSize.start,
              props.cubeProps.springGainInterpolationSize.end,
            ]
          ),
          scale: props.cubeProps.bassScale[0],
          fontSize: props.cubeProps.textSize,
          textShadow:
            '-1px -1px 0 rgb(23,23,23),  1px -1px 0 rgb(23,23,23),-1px 1px 0 rgb(23,23,23),1px 1px 0 rgb(23,23,23)',
          willChange: 'transform',
        }}
      >
        {props.children}
      </animated.div>
    </>
  );
};

export default ParallaxSceneFace;
