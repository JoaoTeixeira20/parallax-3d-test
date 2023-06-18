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
import ParallaxSceneMobile from '../ParallaxSceneMobile/ParallaxSceneMobile';

type ParallaxSceneWrapperProps = {
  index: number;
};

const CONTAINER_SIZE = 280;

const ParallaxSceneWrapper = (
  props: ParallaxSceneWrapperProps
): ReactElement => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { spring, isMobileRef } = useContext(PagesContext);

  const navigate = useNavigate();

  const scrollRef = useRef([0,0]);
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
    setCenterPos(([x, y]) => [x + scrollX, y + scrollY]);
    scrollRef.current = [window.scrollX, window.scrollY];
  }, []);

  /* i could opt by using useScroll from react-spring but it would lag the mobile listeners
   * in this case, the listener is added if it's not a mobile device
   */
  useEffect(() => {
    if(!isMobileRef.current) {
      window.addEventListener('mousemove', handleMouseMove,{passive:true});
      window.addEventListener('scroll', handleScroll,{passive:true});
    }
    return () => {
      if(!isMobileRef.current) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleClickEvent = useCallback((index: number) => {
    navigate(`/cards/${index}`);
  }, []);

  return (
    <>
      <div
        ref={wrapperRef}
        style={{
          ...(isMobileRef.current && {
            paddingTop: window.innerHeight/2-CONTAINER_SIZE,
            paddingBottom: window.innerHeight/2-CONTAINER_SIZE,
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
              centerCoords={centerPos}
              cubeSize={200}
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
              containerSize={CONTAINER_SIZE}
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
