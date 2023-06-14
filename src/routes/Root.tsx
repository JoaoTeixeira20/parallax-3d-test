import Main from '@/components/Main/Main';
const MenuWrapper = lazy(() => import('@/components/MenuWrapper/MenuWrapper'));
const CardContentRenderer = lazy(
  () => import('@/components/CardContentRenderer/CardContentRenderer')
);
import { animated, useTransition, config as SpringConfig } from '@react-spring/web';
import React, { ReactElement, Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

const Root = (): ReactElement => {
  const location = useLocation();

  const transitions = useTransition(location, {
    initial: {
      opacity: 0,
      // scale: 0,
      transform: 'translate3D(0%, 0%, 0)',
      filter: 'blur(1px)',
    },
    from: {
      opacity: 0,
      // scale: 0,
      transform: 'translate3D(0%, -100%, 0)',
      filter: 'blur(1px)',
    },
    enter: {
      opacity: 1,
      // scale: 1,
      transform: 'translate3D(0%, 0%, 0)',
      filter: 'blur(0px)',
    },
    leave: {
      position: 'absolute',
      opacity: 0,
      // scale: 0,
      transform: 'translate3D(0%, 100%, 0)',
      filter: 'blur(1px)',
    },
    config: { mass: 1, tension: 130, friction: 17 },
  });

  return (
    <Main>
      {transitions((styles, item) => (
        <animated.div className="flex flex-col" style={styles}>
          <Routes location={item.pathname}>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>loading menu...</div>}>
                  <MenuWrapper />
                </Suspense>
              }
            />
            <Route
              path="/:id"
              element={
                <Suspense fallback={<div>loading menu...</div>}>
                  <MenuWrapper />
                </Suspense>
              }
            />
            <Route
              path="/cards/:id"
              element={
                <Suspense fallback={<div>loading card...</div>}>
                  <CardContentRenderer />
                </Suspense>
              }
            />
          </Routes>
        </animated.div>
      ))}
    </Main>
  );
};

export default Root;
