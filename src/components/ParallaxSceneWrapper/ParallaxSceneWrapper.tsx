import { PagesContext } from '@/context/PagesContext';
import React, { ReactElement, useCallback, useContext, useRef } from 'react';
import ParallaxScene from '../ParallaxScene/ParallaxScene';
import { useNavigate } from 'react-router-dom';
import { items } from '@/content/items';

type ParallaxSceneWrapperProps = {
  index: number;
};

const MOBILE_CONTAINER_SIZE = 280;
const DESKTOP_CONTAINER_SIZE = 360;

const ParallaxSceneWrapper = (
  props: ParallaxSceneWrapperProps
): ReactElement => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { spring, isMobileRef } = useContext(PagesContext);

  const navigate = useNavigate();

  const handleClickEvent = useCallback((index: number) => {
    navigate(`/cards/${index}`);
  }, []);

  return (
    <>
      <div
        ref={wrapperRef}
        style={{
          ...(isMobileRef.current && {
            paddingTop: window.innerHeight / 2 - MOBILE_CONTAINER_SIZE * 0.9,
            paddingBottom: window.innerHeight / 2 - MOBILE_CONTAINER_SIZE * 0.9,
          }),
        }}
        className="
          flex
          flex-row
          flex-wrap
          justify-center
          items-center
          max-w-screen-xl
          "
      >
        {items.map((el, index) =>
          (
            <ParallaxScene
              key={index}
              active={props.index === index}
              springRef={spring}
              containerSize={isMobileRef.current ? MOBILE_CONTAINER_SIZE : DESKTOP_CONTAINER_SIZE}
              onClickHandler={handleClickEvent.bind(null, index)}
              isMobile={isMobileRef.current}
            >
              {el}
            </ParallaxScene>
          )
        )}
      </div>
    </>
  );
};

ParallaxSceneWrapper.defaultProps = {
  index: 0,
};

export default ParallaxSceneWrapper;
