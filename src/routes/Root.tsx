import Main from '@/components/Main/Main';
const MenuWrapper = lazy(() => import('@/components/MenuWrapper/MenuWrapper'));
const CardContentRenderer = lazy(
  () => import('@/components/CardContentRenderer/CardContentRenderer')
);
import { animated, useTransition } from '@react-spring/web';
import React, { ReactElement, Suspense, lazy, useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

const Root = (): ReactElement => {
  const location = useLocation();
  const routeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'instant'});
  },[location])

  const transitions = useTransition(location, {
    initial: {
      gridTemplateRows: '0fr',
      opacity: 0,
      scale: 0,
      translateY: '0%',
    },
    from: {
      gridTemplateRows: '0fr',
      opacity: 0,
      scale: 0,
      translateY: '-100%',
    },
    enter: {
      gridTemplateRows: '1fr',
      opacity: 1,
      scale: 1,
      translateY: '0%',
    },
    leave: {
      gridTemplateRows: '0fr',
      display: 'none',
      opacity: 0,
      scale: 0,
      translateY: '-100%',
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
