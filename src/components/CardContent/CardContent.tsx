import { PagesContext } from '@/context/PagesContext';
import React, { ReactElement, useContext, useEffect, useRef } from 'react';
import ParallaxScene from '../ParallaxScene/ParallaxScene';
import { useNavigate } from 'react-router';

type CardContentProps = {
  index: number;
};

const CardContent = (props: CardContentProps): ReactElement => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { focusPos, spring, mainContainerSize } = useContext(PagesContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/#index${props.index}`);
  };

  useEffect(() => {
    setTimeout(() => {
      containerRef.current && containerRef.current?.scrollIntoView({behavior: 'smooth' });
    }, 200);
    }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-row"
      style={{
        minWidth: mainContainerSize.width,
        minHeight: mainContainerSize.height,
      }}
    >
      <div
        style={{
          position: 'relative',
          alignSelf: 'flex-start',
          justifySelf: 'flex-start',
        }}
      >
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
      <p>hello card content, my index is {props.index}</p>
    </div>
  );
};

export default CardContent;
