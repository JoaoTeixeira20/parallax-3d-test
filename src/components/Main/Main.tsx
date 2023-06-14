import React, { PropsWithChildren, useContext } from 'react';
import { animated } from '@react-spring/web';
import { PagesContext } from '@/context/PagesContext';

const Main = (props: PropsWithChildren) => {
  const { spring } = useContext(PagesContext);

  return (
    <animated.main
      //   onClick={playMusic}
      className="relative min-h-screen w-full flex justify-center"
      style={{
        backgroundColor: spring.trebleGain.to(
          [0, 1],
          ['rgb(100 116 139)', 'rgb(30 41 59)']
        ),
      }}
    >
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="relative text-center p-3 h-14 w-full"></div>
        <div className="relative container">{props.children}</div>
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.16)',
            borderRadius: '2px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(4.1px)',
            WebkitBackdropFilter: 'blur(5px)',
            borderBottom: '0.1px solid rgba(255, 255, 255, 0.4)',
          }}
          className="fixed text-center p-3 text-2xl font-bold top-0 z-10 h-14 bg-gradient-to-t from-cyan-900 to-transparent w-full text-cyan-900"
        >
          im the header
        </div>
        <div className="relative text-center p-3 h-14 w-full"></div>
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.16)',
            borderRadius: '2px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(4.1px)',
            WebkitBackdropFilter: 'blur(5px)',
            borderTop: '0.1px solid rgba(255, 255, 255, 0.4)',
          }}
          className="absolute text-center p-3 text-2xl font-bold h-14 bg-cyan-900 w-full text-cyan-900 bottom-0"
        >
          im the footer
        </div>
      </div>
    </animated.main>
  );
};

export default Main;
