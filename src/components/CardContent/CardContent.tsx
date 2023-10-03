import React, {
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useNavigate } from 'react-router';
import SvgArc from '../svgs/SvgArc';
import SphereScene from '../SphereScene/ShpereScene';

type CardContentProps = {
  index: number;
};

const CardContent = (props: CardContentProps): ReactElement => {
  const stickyElementRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState<boolean>(false);

  const handleClick = () => {
    window.navigator.vibrate && window.navigator.vibrate([40]);
    navigate(`/${props.index}`);
  };

  useEffect(() => {
    const cachedRef = stickyElementRef.current;
    const observer = new IntersectionObserver(
      ([e]) => {
        console.log(e.intersectionRatio);
        if (e.intersectionRatio === 1) {
          console.log('oh babyyy');
          setStuck(false);
          return;
        }
        if (e.intersectionRatio < 1) {
          console.log('im stuck stepbro');
          setStuck(true);
          return;
        }
      },
      { threshold: [1], rootMargin: '-40px' }
    );

    cachedRef && observer.observe(cachedRef);
    return () => {
      observer.disconnect();
    };
  }, [stickyElementRef]);

  return (
    <div ref={containerRef} className="container relative">
      <div className="p-14 w-full flex justify-center items-center">
        {/* <animated.div
          className="bg-amber-600 p-4 rounded-3xl"
          style={{
            scale: spring.trebleGain.to([0, 1], [1, 1.1]),
            outlineWidth: spring.bassGain.to([0, 1], [10, 20]),
            outlineStyle: 'solid',
            outlineColor: spring.bassGain.to([0, 1], ['rgb(165 243 252)', 'rgb(22 78 99)']),
          }}
        >
          <animated.div
            className="text-3xl"
            style={{
              scale: spring.trebleGain.to([0, 1], [1, 0.9]),
            }}
          >
            this is me, in a curious strange state, and i don't know what to do,
            please help me, im trying to break the matrix
          </animated.div>
        </animated.div> */}
      </div>
      <div ref={stickyElementRef}></div>
      <div
        onClick={handleClick}
        className={`sticky
          cursor-pointer
          top-14
          flex
          flex-col
          items-center
          justify-center
          w-full`}
      >
        <div
          className={`
            relative
            text-amber-500
            w-full
            h-auto
            flex
            ${stuck ? 'text-lg' : 'text-sm'}
            ${stuck ? 'font-bold' : 'font-normal'}
            items-center
            justify-center
            flex-col
            rounded-sm
            py-2
            m-0
            opacity-80 px-5`}
          style={{
            background:
              'linear-gradient(90deg, rgba(30,41,59,0) 0%, rgba(30,41,59,1) 25%, rgba(30,41,59,1) 75%, rgba(30,41,59,0) 100%)',
          }}
        >
          {/* {stuck && (
            <animated.p
              style={{ scaleX: spring.bassGain.to([0, 1], [0.6,1]), rotateY: spring.trebleGain.to([0,1],['0deg','-45deg']) }}
              className="pr-5 font-bold text-3xl"
            >
              &#8592;
            </animated.p>
          )} */}
          <p>go back to ${props.index}</p>
          <SphereScene sphereDiameter={50}/>
        </div>
        <SvgArc active={stuck} />
        {/* <SvgWave active={stuck}/> */}
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
