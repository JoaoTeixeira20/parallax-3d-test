import { PagesContext } from '@/context/PagesContext';
import React, {
  ReactElement,
  useCallback,
  useContext,
  useState,
} from 'react';
import ParallaxScene from '../ParallaxScene/ParallaxScene';
import { useNavigate } from 'react-router-dom';
import { items } from '@/content/items';
import { useDrag } from '@use-gesture/react';

type ParallaxSceneWrapperProps = {
  index: number;
};

const ParallaxSceneWrapper = (
  props: ParallaxSceneWrapperProps
): ReactElement => {
  const { spring, focusPos, setFilterEnabled, isMobileRef } =
    useContext(PagesContext);
  // const [activeContainer, setActiveContainer] = useState<boolean[]>(
  //   items.map((_, index) =>
  //     props.index === index && isMobileRef.current
  //       ? true
  //       : !props.index && index === 0
  //       ? true
  //       : false
  //   )
  // );

  // const bind = useDrag(
  //   (state) => {
  //     const { swipe } = state;
  //     if (swipe[1] === -1) {
  //       setActiveContainer((prev) => {
  //         const index = prev.indexOf(true);
  //         if (index < prev.length - 1) {
  //           prev[index] = false;
  //           prev[index + 1] = true;
  //           return [...prev];
  //         }
  //         return prev;
  //       });
  //     }
  //     if (swipe[1] === 1) {
  //       setActiveContainer((prev) => {
  //         const index = prev.indexOf(true);
  //         if (index > 0) {
  //           prev[index] = false;
  //           prev[index - 1] = true;
  //           return [...prev];
  //         }
  //         return prev;
  //       });
  //     }
  //   },
  //   {
  //     //   target: window,
  //     pointer: {
  //       touch: true,
  //     },
  //   }
  // );
  const navigate = useNavigate();

  const handleMouseOverEvent = useCallback(() => {
    setFilterEnabled(false);
  }, []);

  const handleMouseOutEvent = useCallback(() => {
    setFilterEnabled(true);
  }, []);

  const handleClickEvent = useCallback((index: number) => {
    navigate(`/cards/${index}`);
  }, []);

  return (
    <>
      {/* {isMobileRef.current === true && (
        <div style={{ height: (200 * 1.8) / 2, width: 200 * 1.8 }}></div>
      )} */}
      <div
        className="flex flex-row flex-wrap justify-center max-w-screen-xl"
        // style={{ touchAction: 'none' }}
        // {...bind()}
      >
        {items.map((el, index) => (
          <ParallaxScene
            key={index}
            // active={activeContainer[index]}
            active={false}
            springRef={spring}
            mouseX={focusPos.x}
            mouseY={focusPos.y}
            cubeSize={200}
            onMouseOverHandler={handleMouseOverEvent}
            onMouseOutHandler={handleMouseOutEvent}
            onClickHandler={handleClickEvent.bind(null, index)}
          >
            {el}
          </ParallaxScene>
        ))}
      </div>
      {/* {isMobileRef.current === true && (
        <div style={{ height: (200 * 1.8) / 2, width: 200 * 1.8 }}></div>
      )} */}
    </>
  );
};

ParallaxSceneWrapper.defaultProps = {
  index: 0,
};

export default ParallaxSceneWrapper;
