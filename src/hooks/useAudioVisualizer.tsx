import { useEffect, useState } from 'react';

const useAudioVisualizer = (
  audioRef: React.RefObject<HTMLAudioElement>,
  fftSize: number
): number => {
  const [gain, setGain] = useState<number>(0);

  useEffect(() => {
    let animationFrameId: number;
    let audioContext: AudioContext | null = null;
    let analyser: AnalyserNode | null = null;
    let dataArray: Uint8Array | null = null;

    const visualize = () => {
      animationFrameId = requestAnimationFrame(visualize);

      if (analyser && dataArray) {
        analyser.getByteFrequencyData(dataArray);

        // Calculate the average of the bass values
        const average =
          dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;

        const normalizedGain = (average - 0) / (255 - 0);

        setGain(1 + normalizedGain);
      }
    };

    const startAudioContext = () => {
      if (audioRef.current && audioContext === null) {
        audioContext = new AudioContext();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = fftSize;

        const source = audioContext.createMediaElementSource(audioRef.current);
        source.connect(analyser);
        analyser.connect(audioContext.destination);

        dataArray = new Uint8Array(analyser.frequencyBinCount);

        visualize();
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener('play', startAudioContext);
      audioRef.current.addEventListener('ended', () => {
        if (audioContext) {
          audioContext.close();
          audioContext = null;
        }
        if (analyser) {
          analyser.disconnect();
          analyser = null;
        }
        dataArray = null;
      });
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
        audioRef.current.removeEventListener('ended', () => {
          if (audioContext) {
            audioContext.close();
            audioContext = null;
          }
          if (analyser) {
            analyser.disconnect();
            analyser = null;
          }
          dataArray = null;
        });
      }
    };
  }, [audioRef, fftSize]);

  return gain;
};

export default useAudioVisualizer;