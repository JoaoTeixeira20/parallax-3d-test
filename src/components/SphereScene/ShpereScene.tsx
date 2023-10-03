import { PagesContext } from '@/context/PagesContext';
import {
  calculateXPosition,
  parallax,
  rangeConversion,
} from '@/helpers/formulas';
import { animated, useSpring } from '@react-spring/web';
import React, { useCallback, useContext, useEffect, useRef } from 'react';

type SphereSceneProps = {
  sphereDiameter: number;
};

export default function SphereScene(props: SphereSceneProps) {
  const { spring } = useContext(PagesContext);
  const scrollRef = useRef([0, 0]);
  const prevMouseCoords = useRef([0, 0]);
  const elementCenterPos = useRef([0, 0]);
  const elementRef = useRef<HTMLDivElement>(null);
  const [mouseSpring, api] = useSpring(
    {
      rotateX: 0,
      rotateY: 0,
    },
    []
  );

  const sphereProps = {
    diameter: props.sphereDiameter,
    poles: {
      initial: -props.sphereDiameter / 2,
      final: props.sphereDiameter / 2,
    },
    splitSize: props.sphereDiameter / 10,
    radius: props.sphereDiameter / 2,
    containerSize: props.sphereDiameter * 1.5,
    bassWeirdness: (props.sphereDiameter / 2) * 0.8,
    bassZtransform: (props.sphereDiameter / 2) * 0.25,
    bassMinSize: (props.sphereDiameter / 2) * 0.75,
    bassInnerDotScale: {
      initial: 0.8,
      final: 1.2,
    },
    bassInnerDotSize: (props.sphereDiameter / 2) * 0.3,
    bassOutlineSize: (props.sphereDiameter / 2) * 0.15,
  };

  const handleMouseMove = useCallback((event: MouseEvent) => {
    prevMouseCoords.current = [event.pageX, event.pageY];
    const [rotateX, rotateY] = parallax(
      event.pageX,
      event.pageY,
      elementCenterPos.current[0],
      elementCenterPos.current[1],
      45
    );
    api.start({
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
    api.start({
      rotateX,
      rotateY,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (elementRef.current) {
        const { left, top } = elementRef.current.getBoundingClientRect();
        elementCenterPos.current = [
          left + window.scrollX + sphereProps.containerSize / 2,
          top + window.scrollY + sphereProps.containerSize / 2,
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
      api.start({
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
  },[]);

  const initializeSphere = () => {
    const elements = [];
    for (
      let i = sphereProps.poles.initial;
      i < sphereProps.poles.final;
      i += sphereProps.splitSize
    ) {
      const x = calculateXPosition(i, sphereProps.radius);
      elements.push(
        <animated.div
          key={i}
          style={{
            left: '50%',
            top: '50%',
            position: 'absolute',
            boxSizing: 'border-box',
            width: `${x * 2}px`,
            height: `${x * 2}px`,
            borderRadius: '50%',
            backgroundColor: 'rgba(8, 145, 178, 0.3)',
            outline: `2px solid rgb(22 78 99)`,
            translateX: '-50%',
            translateY: '-50%',
            translateZ: i,
            opacity: spring.trebleGain.to((value) => {
              return rangeConversion(
                i,
                sphereProps.poles.initial,
                sphereProps.poles.final,
                0,
                1
              ) > value
                ? 0
                : 1;
            }),
            scale: spring.bassGain.to([0,1],[0.8,1]),
            willChange: 'transform, opacity',
          }}
        ></animated.div>
      );
    }
    return elements;
  };

  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        width: sphereProps.containerSize,
        height: sphereProps.containerSize,
      }}
    >
      <animated.div
        ref={elementRef}
        style={{
          position: 'relative',
          width: sphereProps.diameter,
          height: sphereProps.diameter,
          transformStyle: 'preserve-3d',
          perspective: 500,
          rotateX: mouseSpring.rotateX,
          rotateY: mouseSpring.rotateY,
          translate3d: ['0%', '0%', 0],
          willChange: 'transform'
        }}
      >
        {initializeSphere()}
        <animated.div
          style={{
            left: '50%',
            top: '50%',
            position: 'absolute',
            translateX: '-50%',
            translateY: '-50%',
            transformStyle: 'preserve-3d',
            translateZ: spring.trebleGain.to((value) =>
              rangeConversion(
                value,
                0,
                1,
                sphereProps.poles.initial,
                sphereProps.poles.final
              )
            ),
            willChange: 'transform',
          }}
        >
          <animated.div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minWidth: sphereProps.bassMinSize,
              minHeight: sphereProps.bassMinSize,
              boxSizing: 'border-box',
              width: spring.bassGain.to((value) =>
                value > 0.5
                  ? calculateXPosition(
                      rangeConversion(
                        value,
                        0,
                        1,
                        sphereProps.poles.initial,
                        sphereProps.bassWeirdness
                      ),
                      sphereProps.bassMinSize
                    ) * 2
                  : calculateXPosition(
                      rangeConversion(
                        0.5,
                        0,
                        1,
                        sphereProps.poles.initial,
                        sphereProps.poles.final
                      ),
                      sphereProps.bassMinSize
                    ) * 2
              ),
              height: spring.bassGain.to((value) =>
                value > 0.5
                  ? calculateXPosition(
                      rangeConversion(
                        value,
                        0,
                        1,
                        sphereProps.poles.initial,
                        sphereProps.poles.final
                      ),
                      sphereProps.bassMinSize
                    ) * 2
                  : calculateXPosition(
                      rangeConversion(
                        0.5,
                        0,
                        1,
                        sphereProps.poles.initial,
                        sphereProps.poles.final
                      ),
                      sphereProps.bassMinSize
                    ) * 2
              ),
              borderRadius: '50%',
              backgroundColor: 'rgba(8, 145, 178,0.5)',
              outline: `${sphereProps.bassOutlineSize}px solid rgb(22 78 99)`,
              translateZ: spring.bassGain.to((value) =>
                rangeConversion(value, 0, 1, 0, sphereProps.bassZtransform)
              ),
              willChange: 'width, height, outline, transform'
            }}
          >
            <animated.div
              style={{
                position: 'relative',
                overflow: 'visible',
                width: sphereProps.bassInnerDotSize,
                height: sphereProps.bassInnerDotSize,
                borderRadius: '50%',
                backgroundColor: 'rgb(22 78 99)',
                scale: spring.bassGain.to(
                  [0, 1],
                  [
                    sphereProps.bassInnerDotScale.initial,
                    sphereProps.bassInnerDotScale.final,
                  ]
                ),
                willChange: 'transform',
              }}
            ></animated.div>
          </animated.div>
        </animated.div>
      </animated.div>
    </div>
  );
}
