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

const ParallaxSceneWrapper = (): ReactElement => {
  const { spring ,setFilterEnabled } = useContext(PagesContext);
  const navigate = useNavigate();
  const scrollRef = useRef({ x: 0, y: 0 });
  const [{ x, y }, setMousePos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      setMousePos({ x: event.pageX, y: event.pageY });
    },
    []
  );

  const handleScroll = useCallback(() => {
    const scrollX = window.scrollX - scrollRef.current.x;
    const scrollY = window.scrollY - scrollRef.current.y;
    setMousePos(({ x, y }) => ({
      x: x + scrollX,
      y: y + scrollY,
    }));
    scrollRef.current = { x: window.scrollX, y: window.scrollY };
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleMouseOverEvent = useCallback(() => {
    setFilterEnabled(false);
  }, []);
  const handleMouseOutEvent = useCallback(() => {
    setFilterEnabled(true);
  }, []);

  const handleClickEvent = useCallback((index: number) => {
    navigate(`/cards/${index}`);
    console.log(index);
  },[]);

  return (
        <div className="flex flex-row flex-wrap justify-center">
          {items.map((el, index) => (
            <div key={index}>
            <ParallaxScene
              springRef={spring}
              mouseX={x}
              mouseY={y}
              onMouseOverHandler={handleMouseOverEvent}
              onMouseOutHandler={handleMouseOutEvent}
              routerIndex={index}
              onClickHandler={handleClickEvent.bind(null, index)}
            >
              {el}
            </ParallaxScene>
            </div>
          ))}
        </div>
  );
};

export default ParallaxSceneWrapper;
