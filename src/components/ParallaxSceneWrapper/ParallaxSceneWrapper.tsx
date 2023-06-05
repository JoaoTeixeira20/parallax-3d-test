import React, { ReactElement, useRef } from 'react';
import ParallaxScene from '../ParallaxScene/ParallaxScene';
import useAudioVisualizer from '@/hooks/useAudioVisualizer';
import { animated, useSpring } from '@react-spring/web';

const items = ['sound', 'spectrum', 'analyzer', 'boxes', 'mouse', 'parallax'];

const ParallaxSceneWrapper = (): ReactElement => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const { gain, setFilterEnabled } = useAudioVisualizer(audioRef, 32);

  const audioSpring = useSpring({
    outlineColor: gain,
    immediate: true,
  });

  const playMusic = () => {
    audioRef.current?.play();
  };

  return (
    <animated.div
      onClick={playMusic}
      style={{
        backgroundColor: audioSpring.outlineColor.to(
          [1, 2],
          ['rgb(100 116 139', 'rgb(30 41 59']
        ),
      }}
    >
      <div className='flex flex-row w-full justify-around'>
      <audio ref={audioRef} src="assets/intensify.mp3" controls></audio>
      <p className='text-center p-3 text-2xl font-bold'>click anywhere</p>
      </div>
      <div className="flex flex-row flex-wrap max-w-screen-xl">
        {items.map((el, index) => (
          <ParallaxScene
            key={index}
            gain={gain}
            enableFilterFunc={setFilterEnabled}
          >
            {el}
          </ParallaxScene>
        ))}
      </div>
    </animated.div>
  );
};

export default ParallaxSceneWrapper;
