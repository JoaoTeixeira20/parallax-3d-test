import React, { ReactElement } from 'react';
import { useSearchParams } from 'react-router-dom';
import ParallaxSceneWrapper from '../ParallaxSceneWrapper/ParallaxSceneWrapper';

const MenuWrapper = (): ReactElement => {
  const [params, _] = useSearchParams();

  return (
      <ParallaxSceneWrapper index={Number(params.get('id'))} />
  );
};

export default MenuWrapper;
