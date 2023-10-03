import { rangeConversion } from '@/helpers/formulas';
import { SpringValue, useSpring } from '@react-spring/web';
import { useCallback, useEffect } from 'react';

const BASS_FILTER = {
  ACTIVE: 5,
  INACTIVE: 100,
};
const TREBLE_FILTER = {
  ACTIVE: 600,
  INACTIVE: 300,
};

let animationFrameId: number;
let audioContext: AudioContext = new AudioContext();
let source: MediaElementAudioSourceNode | null = null;
let bassDataArray: Uint8Array | null = null;
let trebleDataArray: Uint8Array | null = null;
let bassAnalyser: AnalyserNode | null = null;
let trebleAnalyser: AnalyserNode | null = null;
let bassFilterAnalyser: BiquadFilterNode | null = null;
let trebleFilterAnalyser: BiquadFilterNode | null = null;
let gainNode: GainNode | null = null;

const useSpringAudioSpectrum = (
  audioRef: React.RefObject<HTMLAudioElement>,
  fftSize: number
): {
  setFilterEnabled: (state: boolean) => void;
  changeVolume: (value: number) => void;
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
    if (trebleFilterAnalyser && bassFilterAnalyser && audioContext) {
      if (state) {
        trebleFilterAnalyser.frequency.cancelAndHoldAtTime(audioContext?.currentTime);
        trebleFilterAnalyser.frequency.exponentialRampToValueAtTime(
          TREBLE_FILTER.ACTIVE,
          audioContext.currentTime + 0.3
        );
        bassFilterAnalyser.frequency.cancelAndHoldAtTime(audioContext?.currentTime);
        bassFilterAnalyser.frequency.exponentialRampToValueAtTime(
          BASS_FILTER.ACTIVE,
          audioContext.currentTime + 0.3
        );
        return;
      }
      trebleFilterAnalyser.frequency.cancelAndHoldAtTime(audioContext?.currentTime);
      trebleFilterAnalyser.frequency.exponentialRampToValueAtTime(
        TREBLE_FILTER.INACTIVE,
        audioContext.currentTime + 0.3
      );
      bassFilterAnalyser.frequency.cancelAndHoldAtTime(audioContext?.currentTime);
      bassFilterAnalyser.frequency.exponentialRampToValueAtTime(
        BASS_FILTER.INACTIVE,
        audioContext.currentTime + 0.3
      );
    }
  };

  const changeVolume = (volume: number) => {
    if(volume > 1) {
      console.error('volume too loud, select a decimal value between 0 and 1');
    }
    gainNode && gainNode.gain.setValueAtTime(volume,audioContext.currentTime);
  }

  const visualize = useCallback(() => {
    animationFrameId = requestAnimationFrame(visualize);

    if (bassAnalyser && trebleAnalyser && bassDataArray && trebleDataArray) {
      bassAnalyser.getByteFrequencyData(bassDataArray);
      trebleAnalyser.getByteFrequencyData(trebleDataArray);

      // const normalizedBassAverage =
      //   bassDataArray.reduce((sum, value) => sum + value, 0) /
      //   bassDataArray.length /
      //   255;

      // const normalizedTrebleAverage =
      //   trebleDataArray.reduce((sum, value) => sum + value, 0) /
      //   trebleDataArray.length /
      //   255;

      // console.log(`bass: ${normalizedBassAverage} treble: ${normalizedTrebleAverage}`)

      let normalizedBassAverage = 0;
      let normalizedTrebleAverage = 0;

      for (let x of bassDataArray) {
        normalizedBassAverage += x;
      }

      for (let y of trebleDataArray) {
        normalizedTrebleAverage += y;
      }

      normalizedBassAverage = normalizedBassAverage / bassDataArray.length / 255;
      normalizedTrebleAverage = normalizedTrebleAverage / trebleDataArray.length / 255;

      //bass values vary between .15 and .21 from the filter
      api.set({
        bassGain: rangeConversion(normalizedBassAverage, 0.15, 0.21, 0, 1),
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

      if (!bassFilterAnalyser) {
        bassFilterAnalyser = audioContext.createBiquadFilter();
        bassFilterAnalyser.type = 'lowpass';
        bassFilterAnalyser.frequency.value = BASS_FILTER.INACTIVE;
      }

      if (!trebleFilterAnalyser) {
        trebleFilterAnalyser = audioContext.createBiquadFilter();
        trebleFilterAnalyser.type = 'highpass';
        trebleFilterAnalyser.frequency.value = TREBLE_FILTER.INACTIVE;
      }

      if (!gainNode) {
        gainNode = audioContext.createGain();
        gainNode && gainNode.gain.setValueAtTime(0.5,audioContext.currentTime);
      }

      source.connect(bassFilterAnalyser);
      source.connect(trebleFilterAnalyser);
      bassFilterAnalyser.connect(bassAnalyser);
      trebleFilterAnalyser.connect(trebleAnalyser);
      bassAnalyser.connect(gainNode);
      trebleAnalyser.connect(gainNode);
      gainNode.connect(audioContext.destination);

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
        audioRef.current.removeEventListener('pause', stopAudioContext);
      }
    };
  }, []);

  return { spring, setFilterEnabled, changeVolume };
};

export default useSpringAudioSpectrum;
