import { animated, useSpring, config as springConfig } from '@react-spring/web';
import React from 'react';

type svgArcProps = {
  active: boolean;
};

const SvgArc = (props: svgArcProps) => {

  const activeSpring = useSpring({
    angle: props.active ? 'M 0 0 C 10 10 390 10 400 0' : 'M 0 0 C 0 0 400 0 400 0',
    activeVal: props.active ? 25 : 0,
    config: springConfig.wobbly,
  });

  return (
    <div className='w-full'>
        <svg
        className="opacity-80"
          viewBox="0 0 400 9"
        >
            <linearGradient id="grad-arc" x1="0" y1="0.5" x2="1" y2="0.5">
            <stop offset="0%" stopColor="rgba(30, 41, 59, 0)"/>
            <stop offset="25%" stopColor="rgb(30, 41, 59)"/>
            <stop offset="75%" stopColor="rgb(30, 41, 59)"/>
            <stop offset="100%" stopColor="rgba(30, 41, 59, 0)"/>
            </linearGradient>
          <animated.path fill='url(#grad-arc)' stroke='url(#grad-arc)' d={activeSpring.angle}></animated.path>
        </svg>
    </div>
    // </div>
  );
};

export default SvgArc;
