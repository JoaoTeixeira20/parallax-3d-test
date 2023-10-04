import React, { PropsWithChildren, useContext } from 'react';
import { animated } from '@react-spring/web';
import { PagesContext } from '@/context/PagesContext';
import themeColors from '@/tailwind-theme-colors/tailwind-theme-colors';


const Main = (props: PropsWithChildren) => {
  const { spring } = useContext(PagesContext);

  return (
    <main className={`relative min-h-screen w-full flex justify-center bg-neonTheme-background`}>
      <animated.div
        className="fixed left-0 top-0 w-screen h-screen bg-contain"
        style={{
          // background: spring.trebleGain.to(
          //   [0, 1],
          //   [
          //     `radial-gradient(circle, ${themeColors.neonTheme.backgroundRadial} ${0}%, transparent ${10}%)`,
          //     `radial-gradient(circle, ${themeColors.neonTheme.backgroundRadial} ${80}%, transparent ${90}%)`,
          //   ]
          // ),
          background: "white",
          // background: 'radial-gradient(circle, white 50%, transparent 80%)',
          filter: "blur(50px)",
          border: "1px solid blue",
          borderRadius: "32% 58% 69% 43% / 48% 32% 59% 55%",
          width: "100%",
          height: "100%",
          left: "50%",
          top: "50%",
          translateX: "-50%",
          translateY: "-50%",
          scale: spring.trebleGain.to([0,1],[0,1]),
          rotate: spring.bassGain.to([0.2,1],['0deg','180deg']),
          willChange: 'transform',
        }}
      ></animated.div>
      <div
        className="relative flex flex-col justify-start items-center w-full"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg viewBox="0 0 107 62" width="107" height="62" xmlns="http://www.w3.org/2000/svg">\
          <defs></defs>\
          <g style="fill: ${themeColors.neonTheme.cubeColor};">\
          <path d="M 80.524 53.488 L 109.475 70.203 L 109.475 103.633 L 80.524 120.348 L 51.573 103.633 L 51.573 70.203 Z" transform="matrix(0.866025, 0.5, -0.5, 0.866025, -24.327728, -115.448663)"></path>\
          <path d="M 80.524 53.488 L 109.475 70.203 L 109.475 103.633 L 80.524 120.348 L 51.573 103.633 L 51.573 70.203 Z" transform="matrix(0.866025, 0.5, -0.5, 0.866025, 28.287724, -84.343423)"></path>\
          <path d="M 80.524 53.488 L 109.475 70.203 L 109.475 103.633 L 80.524 120.348 L 51.573 103.633 L 51.573 70.203 Z" transform="matrix(0.866025, 0.5, -0.5, 0.866025, -24.902965, -53.543481)"></path>\
          <path d="M 80.524 53.488 L 109.475 70.203 L 109.475 103.633 L 80.524 120.348 L 51.573 103.633 L 51.573 70.203 Z" transform="matrix(0.866025, 0.5, -0.5, 0.866025, 80.5653, -53.9236)"></path>\
          <path d="M 80.524 53.488 L 109.475 70.203 L 109.475 103.633 L 80.524 120.348 L 51.573 103.633 L 51.573 70.203 Z" transform="matrix(0.866025, 0.5, -0.5, 0.866025, 80.565285, -115.48755)"></path>\
          </g>\
          </svg>')`,
        }}
      >
        <div className="relative text-center p-3 h-14 w-full"></div>
        <div className="relative container h-full">{props.children}</div>
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
          className="fixed text-center p-3 text-2xl font-bold h-14 bg-cyan-900 w-full text-cyan-900 bottom-0"
        >
          im the footer
        </div>
      </div>
    </main>
  );
};

export default Main;
