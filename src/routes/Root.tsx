const Main = lazy(() => import('@/components/Main/Main'));
const MenuWrapper = lazy(() => import('@/components/MenuWrapper/MenuWrapper'));
const CardContentRenderer = lazy(
  () => import('@/components/CardContentRenderer/CardContentRenderer')
);
import { animated, useTransition } from '@react-spring/web';
import React, { ReactElement, Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

const Root = (): ReactElement => {
  const location = useLocation();

  const transitions = useTransition(location, {
    initial: {
      opacity: 0,
      scale: 0,
      transform: 'translate3D(0%, 0%, 0)',
    },
    from: {
      opacity: 0,
      scale: 0,
      transform: 'translate3D(0%, -100%, 0)',
    },
    enter: {
      opacity: 1,
      scale: 1,
      transform: 'translate3D(0%, 0%, 0)',
    },
    leave: {
      position: 'absolute',
      opacity: 0,
      scale: 0,
      transform: 'translate3D(0%, -100%, 0)',
    },
    // from: { opacity: 0, top: "-100%", position: 'absolute', scale: 0 },
    // enter: { opacity: 1, top:"0%", position: 'relative', scale: 1 },
    // leave: { opacity: 0, top: "100%", position: 'absolute', scale: 0 },
    config: { mass: 1, tension: 130, friction: 17, clamp: true },
  });

  return transitions((styles, item) => (
    <Main>
      <animated.div style={styles}>
        <Routes location={item.pathname}>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>loading main...</div>}>
                <MenuWrapper />
              </Suspense>
            }
          />
          <Route
            index
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
    </Main>
  ));
};

export default Root;
