import useAudioVisualizer from '@/hooks/useSpringAudioSpectrum';
import { animated } from '@react-spring/web';
import React, { ReactElement, useRef } from 'react';

const AudioAnalyser = (): ReactElement => {
  const audioRef = useRef(null);
  const { spring } = useAudioVisualizer(audioRef, 64);

  // useEffect(() => {
  //   setFilterEnabled(false);
  // },[]);

  return (
    <div className="flex flex-row flex-wrap">
      <audio ref={audioRef} src="assets/letmedownslowly.mp3" controls></audio>
      {/* <div className="flex flex-row items-end" style={{ height: 250 }}>
          {spring.spectrumList.get().map((el, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundColor: 'red',
                  outline: '1px solid black',
                  width: 20,
                  height: el,
                }}
              ></div>
            );
          })}
      </div> */}
      <div className='flex items-center justify-center' style={{width: "300px", height:"300px"}}>
      <animated.div
        style={{
          backgroundColor: 'red',
          width: spring.trebleGain.to([0,1],[0,200]),
          height: spring.trebleGain.to([0,1],[0,200]),
          borderRadius: '50%',
          outlineColor: 'green',
          outlineStyle: 'solid',
          outlineWidth: spring.bassGain.to([0.09,0.12],[0,20]),
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        hi
      </animated.div>
      </div>
    </div>
  );
};

export default AudioAnalyser;
