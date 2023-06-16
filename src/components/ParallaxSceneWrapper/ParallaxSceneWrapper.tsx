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

type ParallaxSceneWrapperProps = {
  index: number;
};

const ParallaxSceneWrapper = (
  props: ParallaxSceneWrapperProps
): ReactElement => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { spring, isMobileRef } = useContext(PagesContext);

  const navigate = useNavigate();

  const scrollRef = useRef([window.scrollY, window.scrollX]);
  const [centerPos, setCenterPos] = useState<number[]>([
    window.scrollX + window.innerWidth / 2,
    window.scrollY + window.innerHeight / 2,
  ]);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    setCenterPos([event.pageX, event.pageY]);
  }, []);

  const handleScroll = useCallback(() => {
    const scrollX = window.scrollX - scrollRef.current[0];
    const scrollY = window.scrollY - scrollRef.current[1];
    setCenterPos(([x, y]) => [x + scrollX,
      y + scrollY]);
    scrollRef.current = [window.scrollX, window.scrollY];
  }, []);

  useEffect(() => {
    !isMobileRef.current &&
      window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      !isMobileRef.current &&
        window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClickEvent = useCallback((index: number) => {
    //hack to fix blinking router switch route
    if (wrapperRef.current) {
      wrapperRef.current.style.display = 'none';
    }
    navigate(`/cards/${index}`);
  }, []);

  return (
    <>
      <div
        ref={wrapperRef}
        className="flex flex-row flex-wrap justify-center items-center max-w-screen-xl py-12"
      >
        {items.map((el, index) => (
          <ParallaxScene
            key={index}
            active={props.index === index}
            springRef={spring}
            centerCoords={centerPos}
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
