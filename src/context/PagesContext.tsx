import useSpringAudioSpectrum from '@/hooks/useSpringAudioSpectrum';
import { SpringValue } from '@react-spring/web';
import React, {
  MutableRefObject,
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

type PagesContextProps = {
  spring: {
    bassGain: SpringValue<number>;
    trebleGain: SpringValue<number>;
  };
  focusPos: { x: number; y: number };
  changeAudio: (url: string) => void;
  playMusic: () => void;
  setFilterEnabled: (state: boolean) => void;
  isMobileRef: MutableRefObject<boolean>;
  scrollRef: MutableRefObject<{ x: number; y: number }>;
};

type PagesContextProviderProps = {};

const PagesContext = createContext<PagesContextProps>({} as PagesContextProps);

const PagesContextProvider = (
  props: PropsWithChildren<PagesContextProviderProps>
) => {
  const isMobileRef = useRef<boolean>(window.matchMedia('(pointer: coarse)').matches ? true : false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { spring, setFilterEnabled } = useSpringAudioSpectrum(audioRef, 32);
  const scrollRef = useRef({ x: 0, y: 0 });
  const [focusPos, setFocusPos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (isMobileRef.current === true) return;
    setFocusPos({ x: event.pageX, y: event.pageY });
  }, []);

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
    if (isMobileRef.current) {
      setFocusPos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    } 
    if(audioRef.current){
      audioRef.current.src = `${window.location.origin}${window.location.pathname}/assets/intensify.mp3`;
      audioRef.current.load();
    } 

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <PagesContext.Provider
      value={{
        spring,
        focusPos,
        changeAudio,
        playMusic,
        setFilterEnabled,
        isMobileRef,
        scrollRef,
      }}
    >
      <audio className="absolute w-28 z-20 opacity-50" ref={audioRef} controls></audio>
      {props.children}
    </PagesContext.Provider>
  );
};

export { PagesContext, PagesContextProvider };
