import useAudioVisualizer from '@/hooks/useAudioVisualizer';
import React, { ReactElement, useRef } from 'react';

const AudioAnalyser = (): ReactElement => {
  const audioRef = useRef(null);
  const { gain, spectrumList } = useAudioVisualizer(audioRef, 64);

  return (
    <div className='flex flex-row flex-wrap'>
      <audio ref={audioRef} src="intensify.mp3" controls></audio>
      <div className='flex flex-row items-end' style={{height:250}}>
        {spectrumList &&
          spectrumList?.map((el, index) => {
            return (
              <div
                key={index}
                style={{ backgroundColor: 'red', outline: '1px solid black', width: 20, height: el }}
              ></div>
            );
          })}
      </div>
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
    </div>
  );
};

export default AudioAnalyser;
