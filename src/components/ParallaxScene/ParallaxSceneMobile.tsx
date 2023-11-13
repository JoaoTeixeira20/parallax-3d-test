import React, {
  SyntheticEvent,
  useCallback,
  useLayoutEffect,
  useRef,
} from 'react';
import { ParallaxSceneContainerProps } from './parallaxSceneType';
import { animated } from '@react-spring/web';
import ParallaxSceneFace from './ParallaxSceneFace';

const ParallaxSceneMobile = (props: ParallaxSceneContainerProps) => {
  const elementCenterPos = useRef({
    left: 0,
    top: 0,
  });

  const activeRef = useRef<boolean>(false);

  const checkCenterIntersection = useCallback(() => {
    if (
      Math.abs(
        window.scrollY + window.innerHeight / 2 - elementCenterPos.current.top
      ) < props.cubeProps.scrollMarginSize
    ) {
      if (activeRef.current) return;
      window.navigator.vibrate && window.navigator.vibrate([40]);
      props.setActive();
      activeRef.current = true;
      return;
    }
    props.setInactive();
    activeRef.current = false;
    return;
  }, [props.cubeProps]);

  useLayoutEffect(() => {
    setTimeout(() => {
      if (props.elementRef.current) {
        const { left, top } = props.elementRef.current.getBoundingClientRect();
        elementCenterPos.current = {
          left: left + window.scrollX + props.cubeProps.containerSize / 2,
          top: top + window.scrollY + props.cubeProps.containerSize / 2,
        };
        checkCenterIntersection();
      }
      props.active &&
        props.elementRef.current?.scrollIntoView({ block: 'center' });
    }, 300);
    window.addEventListener('scroll', checkCenterIntersection, {
      passive: true,
    });
    return () => {
      window.removeEventListener('scroll', checkCenterIntersection);
    };
  }, []);

  const handleClick = useCallback((event: SyntheticEvent<HTMLElement>) => {
    if (!activeRef.current) {
      props.elementRef.current?.scrollIntoView({ block: 'center' });
      return;
    }
    props.onClickHandler(event);
  }, []);

  const finalProps = { ...props, handleClick };

  return (
    <animated.div style={{ scale: props.spring.scale }}>
      <animated.div
        className="
      relative
      flex
      justify-center
      items-center
      basis-2/6"
        style={{
          minWidth: props.cubeProps.containerSize,
          minHeight: props.cubeProps.containerSize,
          scale: props.springRef.bassGain.to([0, 1], [0.9, 1]),
          willChange: 'transform',
        }}
      >
        <animated.div
          className="flex
          relative
          border-solid border-8 
        border-cyan-900 
          outline-1 
          outline
        outline-cyan-600
          [&>div]:absolute 
          [&>div]:w-full 
          [&>div]:h-full
          [&>div]:opacity-80 
          [&>div]:border 
        [&>div]:border-cyan-600
          [&>div]:rounded-md
        [&>div]:bg-cyan-900"
          style={{
            width: props.cubeProps.originalSize,
            height: props.cubeProps.originalSize,
            scale: props.springRef.trebleGain.to([0, 1], [0.9, 1]),
            background:
              'radial-gradient(circle, rgb(165 243 252), rgb(22 78 99))',
            willChange: 'transform',
          }}
        >
          <ParallaxSceneFace {...finalProps}>
            {props.children}
          </ParallaxSceneFace>
        </animated.div>
      </animated.div>
    </animated.div>
  );
};

export default ParallaxSceneMobile;
