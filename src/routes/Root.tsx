import LoaderComponent from '@/components/LoaderComponent/LoaderComponent';
import Main from '@/components/Main/Main';
import lazyWithPreload from '@/hocs/LazyWithPreload';
const MenuWrapper = lazyWithPreload(
  () => import('@/components/MenuWrapper/MenuWrapper')
);
const CardContentRenderer = lazyWithPreload(
  () => import('@/components/CardContentRenderer/CardContentRenderer')
);
import { animated, useTransition } from '@react-spring/web';
import React, { ReactElement, Suspense, useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

const Root = (): ReactElement => {
  const location = useLocation();
  const routeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location]);

  useEffect(() => {
    MenuWrapper.preload();
    CardContentRenderer.preload();
  }, []);

  const transitions = useTransition(location, {
    initial: {
      gridTemplateRows: '0fr',
      opacity: 0,
      scale: 0.5,
      translateY: '0%',
    },
    from: {
      gridTemplateRows: '0fr',
      opacity: 0,
      scale: 0.5,
      translateY: '-20%',
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
      scale: 0.5,
      translateY: '-20%',
    },
    config: { mass: 1, tension: 130, friction: 17 },
  });

  return (
    <Main>
      <Suspense fallback={<LoaderComponent />}>
        {transitions((styles, item) => (
          <animated.div
            ref={routeContainerRef}
            className={`min-h-full grid`}
            style={styles}
          >
            <Routes location={item.pathname}>
              <Route path="/" element={<MenuWrapper />} />
              <Route path="/:id" element={<MenuWrapper />} />
              <Route path="/cards/:id" element={<CardContentRenderer />} />
            </Routes>
          </animated.div>
        ))}
      </Suspense>
    </Main>
  );
};

export default Root;
