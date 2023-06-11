import { rangeConversion } from '@/helpers/formulas';
import { SpringValue, useSpring } from '@react-spring/web';
import { useCallback, useEffect } from 'react';

let animationFrameId: number;
let audioContext: AudioContext = new AudioContext();
let source: MediaElementAudioSourceNode | null = null;
let bassDataArray: Uint8Array | null = null;
let trebleDataArray: Uint8Array | null = null;
let bassAnalyser: AnalyserNode | null = null;
let trebleAnalyser: AnalyserNode | null = null;
let bassFilter: BiquadFilterNode | null = null;
let trebleFilter: BiquadFilterNode | null = null;

const useSpringAudioSpectrum = (
  audioRef: React.RefObject<HTMLAudioElement>,
  fftSize: number
): {
  setFilterEnabled: (state: boolean) => void;
  spring: {
    bassGain: SpringValue<number>;
    trebleGain: SpringValue<number>;
  };
} => {
  const [spring, api] = useSpring(
    {
      bassGain: 0,
      trebleGain: 0,
      immediate: true,
    },
    []
  );

  const setFilterEnabled = (state: boolean) => {
    // if (bassFilter && audioContext) {
    //   if (state) {
    //     bassFilter.frequency.cancelAndHoldAtTime(audioContext?.currentTime);
    //     bassFilter.frequency.exponentialRampToValueAtTime(
    //       1000,
    //       audioContext.currentTime + 0.3
    //     );
    //     return;
    //   }
    //   bassFilter.frequency.cancelAndHoldAtTime(audioContext?.currentTime);
    //   bassFilter.frequency.exponentialRampToValueAtTime(
    //     8000,
    //     audioContext.currentTime + 0.3
    //   );
    // }
  };

  const visualize = useCallback(() => {
    animationFrameId = requestAnimationFrame(visualize);

    if (bassAnalyser && trebleAnalyser && bassDataArray && trebleDataArray) {
      bassAnalyser.getByteFrequencyData(bassDataArray);
      trebleAnalyser.getByteFrequencyData(trebleDataArray);

      // Calculate the average of the bass values
      const normalizedBassAverage =
        (bassDataArray.reduce((sum, value) => sum + value, 0) /
        bassDataArray.length)/255;

      const normalizedTrebleAverage =
        (trebleDataArray.reduce((sum, value) => sum + value, 0) /
        trebleDataArray.length)/255;

        // console.log(`bass: ${normalizedBassAverage} treble: ${normalizedTrebleAverage}`)

      //bass values vary between .15 and .21 from the filter
      api.set({
        bassGain: rangeConversion(normalizedBassAverage, 0.15,0.21,0,1),
        trebleGain: normalizedTrebleAverage,
      });
    }
  }, []);

  const stopAudioContext = useCallback(() => {
    if (audioContext) {
      setTimeout(() => {
        cancelAnimationFrame(animationFrameId);
        audioContext.suspend();
      }, 1000);
    }
  }, []);

  const initializeParameters = () => {
    if ((!source || !source.mediaElement) && audioRef.current) {
      source = audioContext.createMediaElementSource(audioRef.current);
    }

    if (audioRef.current && source) {
      if (!bassAnalyser) {
        bassAnalyser = audioContext.createAnalyser();
        bassAnalyser.fftSize = fftSize;
      }

      if (!trebleAnalyser) {
        trebleAnalyser = audioContext.createAnalyser();
        trebleAnalyser.fftSize = fftSize;
      }

      if (!bassFilter) {
        bassFilter = audioContext.createBiquadFilter();
        bassFilter.type = 'lowpass';
        bassFilter.frequency.value = 100;
      }

      if (!trebleFilter) {
        trebleFilter = audioContext.createBiquadFilter();
        trebleFilter.type = 'highpass';
        trebleFilter.frequency.value = 300;
      }

      source.connect(bassFilter);
      source.connect(trebleFilter);
      bassFilter.connect(bassAnalyser);
      trebleFilter.connect(trebleAnalyser);
      bassAnalyser.connect(audioContext.destination);
      trebleAnalyser.connect(audioContext.destination);

      if (!bassDataArray) {
        bassDataArray = new Uint8Array(trebleAnalyser.frequencyBinCount);
      }

      if (!trebleDataArray) {
        trebleDataArray = new Uint8Array(trebleAnalyser.frequencyBinCount);
      }
    }
  };

  const startAudioContext = useCallback(() => {
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
    visualize();
  }, []);

  useEffect(() => {
    initializeParameters();
    if (audioRef.current) {
      audioRef.current.removeEventListener('play', startAudioContext);
      audioRef.current.addEventListener('play', startAudioContext);
      audioRef.current.addEventListener('pause', stopAudioContext);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      if (audioContext) {
        audioContext.close();
      }

      if (audioRef.current) {
        audioRef.current.removeEventListener('play', startAudioContext);
        audioRef.current.addEventListener('pause', stopAudioContext);
      }
    };
  }, []);

  return { spring, setFilterEnabled };
};

export default useSpringAudioSpectrum;
