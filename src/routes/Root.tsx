import Main from '@/components/Main/Main';
const MenuWrapper = lazy(() => import('@/components/MenuWrapper/MenuWrapper'));
const CardContentRenderer = lazy(
  () => import('@/components/CardContentRenderer/CardContentRenderer')
);
import { animated, useTransition } from '@react-spring/web';
import React, { ReactElement, Suspense, lazy, useRef, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

const Root = (): ReactElement => {
  const location = useLocation();
  const routeContainerRef = useRef<HTMLDivElement>(null);

  const transitions = useTransition(location, {
    initial: {
      gridTemplateRows: '0fr',
      opacity: 0,
      scale: 0,
      transform: 'translate(0%, 0%)',
    },
    from: {
      gridTemplateRows: '0fr',
      opacity: 0,
      scale: 0,
      transform: 'translate(0%, -100%)',
    },
    enter: {
      gridTemplateRows: '1fr',
      opacity: 1,
      scale: 1,
      transform: 'translate(0%, 0%)',
    },
    leave: {
      gridTemplateRows: '0fr',
      position: 'absolute',
      display: 'none',
      opacity: 0,
      scale: 0,
      transform: 'translate(0%, -100%)',
    },
    onStart: () => {
      routeContainerRef.current?.classList.add('[&>div]:overflow-hidden');
    },
    onRest: () => {
      routeContainerRef.current?.classList.remove('[&>div]:overflow-hidden');
    },
    config: { mass: 1, tension: 130, friction: 17 },
  });

  return (
    <Main>
      {transitions((styles, item) => (
        <animated.div ref={routeContainerRef} className={`min-h-full grid`} style={styles}>
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
