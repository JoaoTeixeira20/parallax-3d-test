import React, { ReactElement, useRef, useState } from 'react';
import ParallaxScene from '../ParallaxScene/ParallaxScene';
import useAudioVisualizer from '@/hooks/useAudioVisualizer';
import { animated, useSpring } from '@react-spring/web';

const ParallaxSceneWrapper = (): ReactElement => {
  const [show, setShow] = useState<boolean>(true);

  const audioRef = useRef<HTMLAudioElement>(null);

  const { gain, setFilterEnabled } = useAudioVisualizer(audioRef, 32);

  const handleSetShow = () => {
    setShow((prev) => !prev);
  };

  const audioSpring = useSpring({
    outlineColor: gain,
    immediate: true,
  });

  return (
    <animated.div
      style={{
        backgroundColor: audioSpring.outlineColor.to(
          [1, 2],
          ['rgb(100 116 139', 'rgb(30 41 59']
        ),
      }}
    >
      <button onClick={handleSetShow}>set show</button>
      <audio ref={audioRef} src="intensify.mp3" controls></audio>
      <div className="flex flex-row flex-wrap max-w-screen-xl">
        {show && <ParallaxScene gain={gain} enableFilterFunc={setFilterEnabled} />}
        {show && <ParallaxScene gain={gain} enableFilterFunc={setFilterEnabled} />}
        {show && <ParallaxScene gain={gain} enableFilterFunc={setFilterEnabled} />}
        {show && <ParallaxScene gain={gain} enableFilterFunc={setFilterEnabled} />}
        {show && <ParallaxScene gain={gain} enableFilterFunc={setFilterEnabled} />}
        {show && <ParallaxScene gain={gain} enableFilterFunc={setFilterEnabled} />}
      </div>
    </animated.div>
  );
};

export default ParallaxSceneWrapper;
