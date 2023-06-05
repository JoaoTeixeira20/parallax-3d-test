import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';

let animationFrameId: number;
let audioContext: AudioContext | null = null;
let analyser: AnalyserNode | null = null;
let dataArray: Uint8Array | null = null;
let source: MediaElementAudioSourceNode | null = null;
let filter: BiquadFilterNode | null = null;

const useAudioVisualizer = (
  audioRef: React.RefObject<HTMLAudioElement>,
  fftSize: number
): {
  gain: number;
  spectrumList: number[];
  setFilterEnabled: Dispatch<SetStateAction<boolean>>;
} => {
  const [gain, setGain] = useState<number>(0);
  const [spectrumList, setSpectrumList] = useState<number[]>([]);
  const [filterEnabled, setFilterEnabled] = useState<boolean>(true);

  useEffect(() => {
    if (filter && audioContext) {
      if (filterEnabled) {
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
  }, [filterEnabled, setFilterEnabled]);

  const visualize = useCallback(() => {
    animationFrameId = requestAnimationFrame(visualize);

    if (analyser && dataArray) {
      analyser.getByteFrequencyData(dataArray);

      // Calculate the average of the bass values
      const average =
        dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;

      const normalizedGain = (average - 0) / (255 - 0);

      setSpectrumList(Array.from(dataArray));

      setGain(1 + normalizedGain);
    }
  }, [setSpectrumList, setGain]);

  const startAudioContext = useCallback(() => {
    if (audioRef.current && audioContext === null) {
      audioContext = new AudioContext();
      analyser = audioContext.createAnalyser();
      analyser.fftSize = fftSize;

      source = audioContext.createMediaElementSource(audioRef.current);

      // Create low-pass filter node
      filter = audioContext.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 1000; // Adjust the cutoff frequency as needed

      source.connect(filter);
      filter.connect(analyser);
      analyser.connect(audioContext.destination);

      dataArray = new Uint8Array(analyser.frequencyBinCount);

      visualize();
    }
  }, [fftSize]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.removeEventListener('play', startAudioContext);
      audioRef.current.addEventListener('play', startAudioContext);
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
      }
    };
  }, [audioRef]);

  return { gain, spectrumList, setFilterEnabled };
};

export default useAudioVisualizer;
