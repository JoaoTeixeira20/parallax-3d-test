import React, { ReactElement } from 'react';
import ParallaxSceneWrapper from '../ParallaxSceneWrapper/ParallaxSceneWrapper';
import { useParams } from 'react-router';

const MenuWrapper = (): ReactElement => {

  const params = useParams();

  return (
    <div className='flex justify-center items-center flex-1'>
      <ParallaxSceneWrapper index={Number(params['id'])} />
    </div>
  );
};

export default MenuWrapper;
