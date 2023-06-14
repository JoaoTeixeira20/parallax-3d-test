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

type ParallaxSceneWrapperProps = {
  index: number;
};

const ParallaxSceneWrapper = (
  props: ParallaxSceneWrapperProps
): ReactElement => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { spring, focusPos, isMobileRef } =
    useContext(PagesContext);

  const navigate = useNavigate();

  const handleClickEvent = useCallback((index: number) => {
    //hack to fix blinking router switch route
    if(wrapperRef.current){
      wrapperRef.current.style.display = 'none';
    }
    navigate(`/cards/${index}`);
  }, []);

  return (
    <>
      <div ref={wrapperRef}
        className="flex flex-row flex-wrap justify-center items-center max-w-screen-xl py-12"
      >
        {items.map((el, index) => (
          <ParallaxScene
            key={index}
            active={props.index === index}
            springRef={spring}
            mouseX={focusPos.x}
            mouseY={focusPos.y}
            cubeSize={200}
            mobileBehaviour={isMobileRef.current}
            onClickHandler={handleClickEvent.bind(null, index)}
          >
            {el}
          </ParallaxScene>
        ))}
      </div>
    </>
  );
};

ParallaxSceneWrapper.defaultProps = {
  index: 0,
};

export default ParallaxSceneWrapper;
