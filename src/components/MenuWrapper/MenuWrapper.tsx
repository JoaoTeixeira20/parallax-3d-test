import React, { ReactElement } from 'react';
import ParallaxSceneWrapper from '../ParallaxSceneWrapper/ParallaxSceneWrapper';
import { useParams } from 'react-router';

const MenuWrapper = (): ReactElement => {

  const params = useParams();

  return (
      <ParallaxSceneWrapper index={Number(params['id'])} />
  );
};

export default MenuWrapper;
