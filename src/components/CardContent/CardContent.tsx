import { PagesContext } from '@/context/PagesContext';
import React, { ReactElement, useContext, useEffect, useRef } from 'react';
import ParallaxScene from '../ParallaxScene/ParallaxScene';
import { useNavigate } from 'react-router';
import { animated } from '@react-spring/web';

type CardContentProps = {
  index: number;
};

const CardContent = (props: CardContentProps): ReactElement => {
  const { spring } = useContext(PagesContext);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    navigate(`/${props.index}`, { preventScrollReset: false });
  };

  return (
    <div ref={containerRef} className="container relative">
      <div className='p-14 w-full h-full flex justify-center items-center'>
      <animated.div
        className="bg-amber-600 p-4 rounded-3xl"
        style={{
          scale: spring.trebleGain.to([0, 1], [1, 1.1]),
          outlineWidth: spring.bassGain.to([0,1], [10,20]),
          outlineStyle: 'solid',
          outlineColor: spring.bassGain.to([0,1],['#aa5b00','#ff0000'])
        }}
      >
        <animated.div className='text-3xl' style={{
          scale: spring.trebleGain.to([0, 1], [1, 0.9 ]),
        }}>
        this is me, in a curious strange state, and i don't know what to do, please help me, im trying to break the matrix
        </animated.div>
      </animated.div>
      </div>
      <div className="sticky top-14 float-left">
        <ParallaxScene
          centerCoords={[0, 0]}
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
