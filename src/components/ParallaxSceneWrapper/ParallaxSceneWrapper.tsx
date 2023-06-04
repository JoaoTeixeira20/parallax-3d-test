import React, { ReactElement, useState } from 'react';
import ParallaxScene from '../ParallaxScene/ParallaxScene';

const ParallaxSceneWrapper = (): ReactElement => {
  const [show, setShow] = useState<boolean>(true);

  const handleSetShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      <button onClick={handleSetShow}>set show</button>
      <div className="flex flex-row flex-wrap max-w-screen-xl">
        {show && <ParallaxScene />}
        {show && <ParallaxScene />}
        {show && <ParallaxScene />}
        {show && <ParallaxScene />}
        {show && <ParallaxScene />}
        {show && <ParallaxScene />}
      </div>
    </div>
  );
};

export default ParallaxSceneWrapper;
