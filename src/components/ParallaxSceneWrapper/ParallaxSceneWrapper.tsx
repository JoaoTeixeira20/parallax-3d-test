import { PagesContext } from '@/context/PagesContext';
import React, {
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useRef,
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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeContainer, setActiveContainer] = useState<boolean[]>(
    items.map((_, index) => (index === 0 ? true : false))
  );
  useDrag(
    (state) => {
      const { swipe } = state;
      if (swipe[1] === -1) {
        setActiveContainer((prev) => {
          const index = prev.indexOf(true);
          if (index < prev.length - 1) {
            prev[index] = false;
            prev[index + 1] = true;
            return [...prev];
          }
          return prev;
        });
      }
      if (swipe[1] === 1) {
        setActiveContainer((prev) => {
          const index = prev.indexOf(true);
          if (index > 0) {
            prev[index] = false;
            prev[index - 1] = true;
            return [...prev];
          }
          return prev;
        });
      }
    },
    {
      target: window,
      pointer: {
        touch: true,
      },
      preventDefault: true,
    }
  );
  const {
    spring,
    focusPos,
    setFilterEnabled,
    setMainContainerSize,
    isMobileRef,
  } = useContext(PagesContext);
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

  useEffect(() => {
    containerRef.current &&
      setMainContainerSize({
        width: containerRef.current?.clientWidth,
        height: containerRef.current?.clientHeight,
      });
  }, []);

  return (
    <>
      {isMobileRef.current === true && (
        <div style={{ height: (200 * 1.8) / 2, width: 200 * 1.8 }}></div>
      )}
      <div
        ref={containerRef}
        className="flex flex-row flex-wrap justify-center"
        style={{ touchAction: 'none' }}
      >
        {items.map((el, index) => (
          <ParallaxScene
            key={index}
            snapScroll={activeContainer[index]}
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
      {isMobileRef.current === true && (
        <div style={{ height: (200 * 1.8) / 2, width: 200 * 1.8 }}></div>
      )}
    </>
  );
};

export default ParallaxSceneWrapper;
