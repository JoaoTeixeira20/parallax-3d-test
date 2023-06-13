import React, { PropsWithChildren, useContext } from 'react';
import { animated } from '@react-spring/web';
import { PagesContext } from '@/context/PagesContext';

const Main = (props: PropsWithChildren) => {

  const { spring } = useContext(PagesContext);

  return (
    <animated.main
      //   onClick={playMusic}
      className="relative h-screen w-screen flex justify-center"
      style={{
        backgroundColor: spring.trebleGain.to(
          [0, 1],
          ['rgb(100 116 139)', 'rgb(30 41 59)']
        ),
      }}
    >
      <div className="relative flex flex-col justify-start items-center container">
        <h1 className="relative text-center p-3 text-2xl font-bold">
          click anywhere
        </h1>
        <div className='overflow-y-auto container'>
          {props.children}
          </div>
          <h1 className="relative text-center p-3 text-2xl font-bold">
          im the footer
        </h1>
      </div>
    </animated.main>
  );
};

export default Main;
