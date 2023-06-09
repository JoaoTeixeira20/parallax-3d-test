import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import ParallaxSceneWrapper from '../ParallaxSceneWrapper/ParallaxSceneWrapper';

const MenuWrapper = (): ReactElement => {
  const params = useParams();

  return (
      <ParallaxSceneWrapper index={Number(params['id'])} />
  );
};

export default MenuWrapper;
