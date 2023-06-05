import useAudioVisualizer from '@/hooks/useAudioVisualizer';
import React, { ReactElement, useRef } from 'react';

const AudioAnalyser = (): ReactElement => {
  const audioRef = useRef(null);
  const gain = useAudioVisualizer(audioRef, 64);

  return (
    <div>
      <audio ref={audioRef} src="basstest.mp3" controls></audio>
      <div
        style={{
          backgroundColor: 'red',
          width: gain * 200,
          height: gain * 200,
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {gain}
      </div>
      {/* <div>
        {audioSpectrum &&
          audioSpectrum?.map((el, index) => {
            return (
              <div
                key={index}
                style={{ backgroundColor: 'red', width: el, height: 20 }}
              ></div>
            );
          })}
      </div> */}
      <div>hello</div>
    </div>
  );
};

export default AudioAnalyser;
