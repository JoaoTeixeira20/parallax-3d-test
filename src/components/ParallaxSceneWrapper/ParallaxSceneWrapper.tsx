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
    <animated.main
      onClick={playMusic}
      className='min-w-full min-h-full flex justify-center'
      style={{
        backgroundColor: audioSpring.outlineColor.to(
          [1, 2],
          ['rgb(100 116 139', 'rgb(30 41 59']
        ),
      }}
    >
      <div className='flex flex-col max-w-screen-xl justify-center items-center'>
      <div className='flex flex-row w-full justify-around'>
      <audio ref={audioRef} src="assets/intensify.mp3" controls></audio>
      <h1 className='text-center p-3 text-2xl font-bold'>click anywhere</h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
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
      </div>
    </animated.main>
  );
};

export default ParallaxSceneWrapper;
