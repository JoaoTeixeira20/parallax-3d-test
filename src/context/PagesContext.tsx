import useSpringAudioSpectrum from '@/hooks/useSpringAudioSpectrum';
import { SpringValue } from '@react-spring/web';
import React, {
  MutableRefObject,
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useRef,
} from 'react';

type PagesContextProps = {
  spring: {
    bassGain: SpringValue<number>;
    trebleGain: SpringValue<number>;
  };
  changeAudio: (url: string) => void;
  playMusic: () => void;
  setFilterEnabled: (state: boolean) => void;
  isMobileRef: MutableRefObject<boolean>;
};

type PagesContextProviderProps = {};

const PagesContext = createContext<PagesContextProps>({} as PagesContextProps);

const PagesContextProvider = (
  props: PropsWithChildren<PagesContextProviderProps>
) => {
  const isMobileRef = useRef<boolean>(window.matchMedia('(pointer: coarse)').matches ? true : false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { spring, setFilterEnabled } = useSpringAudioSpectrum(audioRef, 32);

  // @TODO: check
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

  const handleVisibilityChange = () => {
    document.hidden ? setFilterEnabled(true) : setFilterEnabled(false);
  }

  useEffect(() => {
    if(audioRef.current){
      audioRef.current.src = `${window.location.origin}${window.location.pathname}/assets/dumdeedum.mp3`;
      audioRef.current.load();
    } 

    window.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      window.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <PagesContext.Provider
      value={{
        spring,
        changeAudio,
        playMusic,
        setFilterEnabled,
        isMobileRef,
      }}
    >
      <audio className="absolute w-28 z-20 opacity-50" ref={audioRef} controls></audio>
      {props.children}
    </PagesContext.Provider>
  );
};

export { PagesContext, PagesContextProvider };
