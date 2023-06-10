import React, { PropsWithChildren, useContext } from 'react';
import { animated } from '@react-spring/web';
import { PagesContext } from '@/context/PagesContext';

const Main = (props: PropsWithChildren) => {

  const { spring } = useContext(PagesContext);

  return (
    <animated.main
      //   onClick={playMusic}
      className="relative min-h-screen w-screen flex justify-center"
      style={{
        backgroundColor: spring.gain.to(
          [1, 2],
          ['rgb(100 116 139', 'rgb(30 41 59']
        ),
      }}
    >
      <div className="relative flex flex-col justify-start items-center container">
        <h1 className="relative text-center p-3 text-2xl font-bold">
          click anywhere
        </h1>
          {props.children}
      </div>
    </animated.main>
  );
};

export default Main;
