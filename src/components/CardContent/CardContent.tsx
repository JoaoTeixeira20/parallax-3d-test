import { PagesContext } from '@/context/PagesContext';
import React, { ReactElement, useContext, useEffect, useRef } from 'react';
import ParallaxScene from '../ParallaxScene/ParallaxScene';
import { useNavigate } from 'react-router';

type CardContentProps = {
  index: number;
};

const CardContent = (props: CardContentProps): ReactElement => {
  const { focusPos, spring } = useContext(PagesContext);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    //hack to fix blinking router switch route
    if (containerRef.current) {
      containerRef.current.style.display = 'none';
    }
    navigate(`/${props.index}`, { preventScrollReset: false });
  };

  useEffect(() => {
    //another hack to fix the position of the card content if it is scrollable
    //for some reason it will keep the scroll position...
    //might be due to route transition
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);
  }, []);

  return (
    <div ref={containerRef} className="container relative">
      <div className="sticky top-14 float-left">
        <ParallaxScene
          mouseX={focusPos.x}
          mouseY={focusPos.y}
          springRef={spring}
          cubeSize={100}
          onClickHandler={handleClick}
        >
          back from {props.index}
        </ParallaxScene>
      </div>
      <p>
        hello card content, my index is ${props.index}
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
        sasadsad
        <br />
      </p>
    </div>
  );
};

export default CardContent;
