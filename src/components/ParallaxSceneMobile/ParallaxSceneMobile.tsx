import { cubeSizeCalculator } from '@/helpers/formulas';
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
} from 'react';

type ParallaxSceneProps = PropsWithChildren<{
  active?: boolean;
  springRef: {
    bassGain: SpringValue<number>;
    trebleGain: SpringValue<number>;
  };
  containerSize: number;
  onMouseOverHandler?: () => void;
  onMouseOutHandler?: () => void;
  onClickHandler: (event: SyntheticEvent<HTMLElement>) => void;
}>;

const TABLET_BREAKPOINT = 560;

const ParallaxSceneMobile = (props: ParallaxSceneProps): ReactElement => {
  const elementRef = useRef<HTMLDivElement>(null);
  const elementCenterPos = useRef({
    left: 0,
    top: 0,
  });
  const cubeProps = useMemo(
    () => cubeSizeCalculator(props.containerSize, 'mobile'),
    [props.containerSize]
  );

  const activeRef = useRef<boolean>(false);

  const [spring, api] = useSpring(
    {
      backgroundColor: 'rgba(250, 204, 21,0.1)',
      scale: 1,
      borderRadius: '50%',
      config: { ...springConfig.wobbly, clamp: true },
    },
    []
  );

  const checkCenterIntersection = useCallback(() => {
    if (
      Math.abs(
        window.scrollY + window.innerHeight / 2 - elementCenterPos.current.top
      ) < cubeProps.scrollMarginSize
    ) {
      if (activeRef.current) return;
      window.navigator.vibrate && window.navigator.vibrate([40]);
      api.start({
        backgroundColor: 'rgba(250, 204, 21,0.9)',
        scale: 1.3,
        borderRadius: '1%',
      });
      activeRef.current = true;
      return;
    }
    api.start({
      backgroundColor: 'rgba(250, 204, 21,0.1)',
      scale: 1,
      borderRadius: '50%',
    });
    activeRef.current = false;
    return;
  }, [cubeProps]);

  useEffect(() => {
    setTimeout(() => {
      if (elementRef.current) {
        const { left, top } = elementRef.current.getBoundingClientRect();
        elementCenterPos.current = {
          left: left + window.scrollX + cubeProps.containerSize / 2,
          top: top + window.scrollY + cubeProps.containerSize / 2,
        };
        checkCenterIntersection();
      }
      props.active && elementRef.current?.scrollIntoView({ block: 'center' });
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
      elementRef.current?.scrollIntoView({ block: 'center' });
      return;
    }
    props.onClickHandler(event);
  }, []);

  return (
    <animated.div
      ref={elementRef}
      className="
        relative
        flex
        justify-center
        items-center
        basis-2/6"
      style={{
        minWidth: cubeProps.containerSize,
        minHeight: cubeProps.containerSize,
        scale: props.springRef.bassGain.to([0, 1], [0.9, 1]),
      }}
    >
      <animated.div
        className="flex
       border-solid border-8 
       border-cyan-900 
       outline-1 
       outline 
       outline-cyan-600"
        style={{
          width: cubeProps.cubeSize,
          height: cubeProps.cubeSize,
          scale: spring.scale,
          background:
            'radial-gradient(circle, rgb(165 243 252), rgb(22 78 99))',
        }}
      >
        <animated.div
          onClick={handleClick}
          className="flex justify-center
          items-center
          text
          font-bold
          outline
          border-none
          text-zinc-400
          cursor-pointer
          select-none
          opacity-80 
          border 
        border-cyan-600
          rounded-md
        bg-cyan-900
          w-full
          h-full"
          style={{
            fontSize: cubeProps.textSize,
            backgroundColor: spring.backgroundColor,
            scale: props.springRef.trebleGain.to(
              [0, 1],
              [
                cubeProps.springTrebleScaleSize.start,
                cubeProps.springTrebleScaleSize.end,
              ]
            ),
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
      </animated.div>
    </animated.div>
  );
};

export default ParallaxSceneMobile;
