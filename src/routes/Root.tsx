import Main from '@/components/Main/Main';
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
      // scale: 0,
      transform: 'translate3D(0%, 0%, 0)',
    },
    from: {
      opacity: 0,
      // scale: 0,
      transform: 'translate3D(0%, -100%, 0)',
    },
    enter: {
      opacity: 1,
      // scale: 1,
      transform: 'translate3D(0%, 0%, 0)',
    },
    leave: {
      position: 'absolute',
      display: 'none',
      opacity: 0,
      // scale: 0,
      transform: 'translate3D(0%, 100%, 0)',
    },
    config: { mass: 1, tension: 130, friction: 17 },
  });

  return (
    <Main>
      {transitions((styles, item) => (
        <animated.div className="min-h-full" style={styles}>
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
