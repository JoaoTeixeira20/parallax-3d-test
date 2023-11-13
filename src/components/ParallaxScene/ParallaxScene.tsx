import { useSpring, config as springConfig } from '@react-spring/web';
import React, {
  ReactElement,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import { cubeSizeCalculator } from '@/helpers/formulas';
import {
  ParallaxSceneContainerProps,
  ParallaxSceneProps,
  ParallaxSceneSrpingProps,
} from './parallaxSceneType';
import ParallaxSceneDesktop from './ParallaxSceneDesktop';
import ParallaxSceneMobile from './ParallaxSceneMobile';

const ParallaxScene = ({
  invertedBass = false,
  ...props
}: ParallaxSceneProps): ReactElement => {
  const elementRef = useRef<HTMLDivElement>(null);
  const cubeProps = useMemo(
    () =>
      cubeSizeCalculator(
        props.containerSize,
        props.isMobile ? 'mobile' : 'desktop'
      ),
    [props.containerSize, props.isMobile]
  );

  const [spring, api] = useSpring<ParallaxSceneSrpingProps>(
    {
      rotateX: 0,
      rotateY: 0,
      rotate: '0deg',
      // backgroundColor: isActive
      //   ? 'rgba(250, 204, 21,0.9)'
      //   : 'rgba(250, 204, 21,0.1)',
      // backgroundColor: 'rgba(250,204,21,0.9)',
      // scale: isActive ? 1.2 : 0.9,
      scale: 1,
      // borderRadius: isActive ? '1%' : '50%',
      // borderRadius: '50%',
      config: { ...springConfig.wobbly, clamp: true },
      opacity: 0.1,
    },
    []
  );

  const setActive = useCallback(() => {
    api.start({
      // backgroundColor: 'rgba(250,204,21,0.9)',
      scale: 1.3,
      rotate: '22.5deg',
      // borderRadius: '5px',
      opacity: 0.9,
    });
  }, []);

  const setInactive = useCallback(() => {
    api.start({
      // backgroundColor: 'rgba(250,204,21,0.1)',
      scale: 1,
      rotate: '0deg',
      // borderRadius: '50%',
      opacity: 0.1,
    });
  }, []);

  const propsToPass: ParallaxSceneContainerProps = useMemo(
    () => ({
      ...props,
      invertedBass,
      // handleClick,
      // handleOver,
      // handleOverOut,
      // isActive,
      // setIsActive,
      setActive,
      setInactive,
      cubeProps,
      spring,
      api,
      elementRef,
    }),
    []
  );

  return (
    <div ref={elementRef}>
      {!props.isMobile ? (
        <ParallaxSceneDesktop {...propsToPass}>
          {props.children}
        </ParallaxSceneDesktop>
      ) : (
        <ParallaxSceneMobile {...propsToPass}>
          {props.children}
        </ParallaxSceneMobile>
      )}
    </div>
  );
};

export default ParallaxScene;
