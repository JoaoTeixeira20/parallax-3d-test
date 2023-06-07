import { SpringValue, useSpring } from '@react-spring/web';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
} from 'react';

let animationFrameId: number;
let audioContext: AudioContext = new AudioContext();
let analyser: AnalyserNode | null = null;
let dataArray: Uint8Array | null = null;
let source: MediaElementAudioSourceNode | null = null;
let filter: BiquadFilterNode | null = null;

const useAudioVisualizer = (
  audioRef: React.RefObject<HTMLAudioElement>,
  fftSize: number
): {
  // gain: number;
  // spectrumList: number[];
  setFilterEnabled: (state: boolean) => void;
  spring: {
    gain: SpringValue<number>;
    spectrumList: SpringValue<any[]>;
  };
} => {
  // const [gain, setGain] = useState<number>(0);
  // const [spectrumList, setSpectrumList] = useState<number[]>([]);
  const [spring, api] = useSpring(
    {
      gain: 1,
      spectrumList: new Array().fill(fftSize),
      immediate: true,
    },
    []
  );

  const setFilterEnabled = (state: boolean) => {
    if (filter && audioContext) {
      if (state) {
        filter.frequency.cancelAndHoldAtTime(audioContext?.currentTime);
        filter.frequency.exponentialRampToValueAtTime(
          1000,
          audioContext.currentTime + 0.3
        );
        return;
      }
      filter.frequency.cancelAndHoldAtTime(audioContext?.currentTime);
      filter.frequency.exponentialRampToValueAtTime(
        8000,
        audioContext.currentTime + 0.3
      );
    }
  }

  const visualize = useCallback(() => {
    animationFrameId = requestAnimationFrame(visualize);

    if (analyser && dataArray) {
      analyser.getByteFrequencyData(dataArray);

      // Calculate the average of the bass values
      const average =
        dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;

      const normalizedGain = (average - 0) / (255 - 0);

      // setSpectrumList(Array.from(dataArray));

      // setGain(1 + normalizedGain);

      api.set({
        gain: 1 + normalizedGain,
        spectrumList: Array.from(dataArray),
      });
    }
  },[]);
  // }, [setSpectrumList, setGain]);

  const stopAudioContext = useCallback(() => {
    if (audioContext) {
      cancelAnimationFrame(animationFrameId);
      audioContext.suspend();
    }
  }, []);

  const initializeParameters = () => {
    if ((!source || !source.mediaElement) && audioRef.current) {
      source = audioContext.createMediaElementSource(audioRef.current);
    }

    if (audioRef.current && source) {
      if (!analyser) {
        analyser = audioContext.createAnalyser();
        analyser.fftSize = fftSize;
      }

      if (!filter) {
        // Create low-pass filter node
        filter = audioContext.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 1000; // Adjust the cutoff frequency as needed
      }

      source.connect(filter);
      filter.connect(analyser);
      analyser.connect(audioContext.destination);
      if (!dataArray) {
        dataArray = new Uint8Array(analyser.frequencyBinCount);
      }
    }
  };

  const startAudioContext = useCallback(() => {
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
    visualize();
  }, [fftSize]);

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

  return { setFilterEnabled, spring };
  // return { gain, spectrumList, setFilterEnabled, spring };
};

export default useAudioVisualizer;
