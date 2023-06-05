import React, { ReactElement, useRef, useState } from 'react';
import ParallaxScene from '../ParallaxScene/ParallaxScene';
import useAudioVisualizer from '@/hooks/useAudioVisualizer';

const ParallaxSceneWrapper = (): ReactElement => {
  const [show, setShow] = useState<boolean>(true);

  const audioRef = useRef<HTMLAudioElement>(null);

  const gain = useAudioVisualizer(audioRef, 64);

  const handleSetShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      <button onClick={handleSetShow}>set show</button>
      <audio ref={audioRef} src="intensify.mp3" controls></audio>
      <div className="flex flex-row flex-wrap max-w-screen-xl">
        {show && <ParallaxScene gain={gain} />}
        {show && <ParallaxScene gain={gain} />}
        {show && <ParallaxScene gain={gain} />}
        {show && <ParallaxScene gain={gain} />}
        {show && <ParallaxScene gain={gain} />}
        {show && <ParallaxScene gain={gain} />}
      </div>
    </div>
  );
};

export default ParallaxSceneWrapper;
