import { SpringValue, useSpring } from '@react-spring/web';
import { useCallback, useEffect } from 'react';

let animationFrameId: number;
let audioContext: AudioContext = new AudioContext();
let analyser: AnalyserNode | null = null;
let dataArray: Uint8Array | null = null;
let source: MediaElementAudioSourceNode | null = null;
let filter: BiquadFilterNode | null = null;

const useSpringAudioSpectrum = (
  audioRef: React.RefObject<HTMLAudioElement>,
  fftSize: number
): {
  setFilterEnabled: (state: boolean) => void;
  spring: {
    gain: SpringValue<number>;
    spectrumList: SpringValue<any[]>;
  };
} => {
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
  };

  const visualize = useCallback(() => {
    animationFrameId = requestAnimationFrame(visualize);

    if (analyser && dataArray) {
      analyser.getByteFrequencyData(dataArray);

      // Calculate the average of the bass values
      const average =
        dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;

      const normalizedGain = (average - 0) / (255 - 0);

      api.set({
        gain: 1 + normalizedGain,
        spectrumList: Array.from(dataArray),
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
      if (!analyser) {
        analyser = audioContext.createAnalyser();
        analyser.fftSize = fftSize;
      }

      if (!filter) {
        filter = audioContext.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 1000;
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
