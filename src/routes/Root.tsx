import CardContentRenderer from '@/components/CardContentRenderer/CardContentRenderer';
import Main from '@/components/Main/Main';
import ParallaxSceneWrapper from '@/components/ParallaxSceneWrapper/ParallaxSceneWrapper';
import { animated, useTransition } from '@react-spring/web';
import React, { ReactElement, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

const Root = (): ReactElement => {
  const location = useLocation();

  useEffect(() => {
    console.log('changed location to ', location.pathname);
    console.log(JSON.stringify(location));
  }, [location]);

  const transitions = useTransition(location, {
    // from: { transform: 'translate3d(100%,0,0)' },
    // enter: { transform: 'translate3d(0%,0,0)' },
    // leave: { transform: 'translate3d(-50%,0,0)' },
    from: { opacity: 0, bottom: "-100%", position: 'absolute', scale: 0 },
    enter: { opacity: 1, bottom:"0%", position: 'relative', scale: 1 },
    leave: { opacity: 0, bottom: "100%", position: 'absolute', scale: 0 },
  });

  return (
    <Main>
        <div className='overflow-hidden relative'>
      {transitions((styles, item) => (
        <animated.div style={{ ...styles }}>
          <Routes location={item}>
            <Route path="/" Component={ParallaxSceneWrapper} />
            <Route path="/cards/:id" Component={CardContentRenderer} />
          </Routes>
        </animated.div>
      ))}
      </div>
    </Main>
  );
};

export default Root;
