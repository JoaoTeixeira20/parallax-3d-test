import useSpringAudioSpectrum from '@/hooks/useSpringAudioSpectrum';
import { SpringValue } from '@react-spring/web';
import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useRef,
} from 'react';

type PagesContextProps = {
  spring: {
    gain: SpringValue<number>;
    spectrumList: SpringValue<any[]>;
  };
  changeAudio: (url: string) => void;
  playMusic: () => void;
  handleMouseOverEvent: () => void;
  handleMouseOutEvent: () => void;
  setFilterEnabled: (state: boolean) => void;
};

type PagesContextProviderProps = {};

const PagesContext = createContext<PagesContextProps>({} as PagesContextProps);

const PagesContextProvider = (
  props: PropsWithChildren<PagesContextProviderProps>
) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { spring, setFilterEnabled } = useSpringAudioSpectrum(audioRef, 32);
  const changeAudio = (url: string) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        if (audioRef.current) {
          audioRef.current.src = URL.createObjectURL(blob);
          audioRef.current.load();
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const playMusic = useCallback(() => {
    audioRef.current?.play();
  }, []);

  const handleMouseOverEvent = useCallback(() => {
    setFilterEnabled(false);
  }, []);
  const handleMouseOutEvent = useCallback(() => {
    setFilterEnabled(true);
  }, []);

  useEffect(() => {
    changeAudio('/assets/intensify.mp3');
  }, []);

  return (
    <PagesContext.Provider
      value={{
        spring,
        changeAudio,
        playMusic,
        handleMouseOverEvent,
        handleMouseOutEvent,
        setFilterEnabled,
      }}
    >
      <audio className='absolute z-10' ref={audioRef} controls></audio>
      {props.children}
    </PagesContext.Provider>
  );
};

export { PagesContext, PagesContextProvider };
