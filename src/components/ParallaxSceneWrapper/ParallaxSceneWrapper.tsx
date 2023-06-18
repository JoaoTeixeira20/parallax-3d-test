import { PagesContext } from '@/context/PagesContext';
import React, {
  ReactElement,
  useCallback,
  useContext,
  useRef,
} from 'react';
import ParallaxScene from '../ParallaxScene/ParallaxScene';
import { useNavigate } from 'react-router-dom';
import { items } from '@/content/items';
import ParallaxSceneMobile from '../ParallaxSceneMobile/ParallaxSceneMobile';

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
            paddingTop: window.innerHeight/2-MOBILE_CONTAINER_SIZE*0.9,
            paddingBottom: window.innerHeight/2-MOBILE_CONTAINER_SIZE*0.9,
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
          !isMobileRef.current ? (
            <ParallaxScene
              key={index}
              active={props.index === index}
              springRef={spring}
              containerSize={DESKTOP_CONTAINER_SIZE}
              mobileBehaviour={isMobileRef.current}
              onClickHandler={handleClickEvent.bind(null, index)}
            >
              {el}
            </ParallaxScene>
          ) : (
            <ParallaxSceneMobile
              key={index}
              active={props.index === index}
              springRef={spring}
              containerSize={MOBILE_CONTAINER_SIZE}
              onClickHandler={handleClickEvent.bind(null, index)}
            >
              {el}
            </ParallaxSceneMobile>
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
