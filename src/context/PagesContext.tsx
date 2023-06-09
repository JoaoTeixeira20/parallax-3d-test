import useSpringAudioSpectrum from '@/hooks/useSpringAudioSpectrum';
import { SpringValue } from '@react-spring/web';
import React, {
  Dispatch,
  MutableRefObject,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

type PagesContextProps = {
  spring: {
    gain: SpringValue<number>;
    spectrumList: SpringValue<any[]>;
  };
  focusPos: { x: number; y: number };
  changeAudio: (url: string) => void;
  playMusic: () => void;
  handleMouseOverEvent: () => void;
  handleMouseOutEvent: () => void;
  setFilterEnabled: (state: boolean) => void;
  mainContainerSize: { width: number; height: number };
  setMainContainerSize: Dispatch<
    SetStateAction<{ width: number; height: number }>
  >;
  isMobileRef: MutableRefObject<boolean>;
  scrollRef: MutableRefObject<{ x: number; y: number }>;
};

type PagesContextProviderProps = {};

const PagesContext = createContext<PagesContextProps>({} as PagesContextProps);

const PagesContextProvider = (
  props: PropsWithChildren<PagesContextProviderProps>
) => {
  const isMobileRef = useRef<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { spring, setFilterEnabled } = useSpringAudioSpectrum(audioRef, 32);
  const scrollRef = useRef({ x: 0, y: 0 });
  const [focusPos, setFocusPos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [mainContainerSize, setMainContainerSize] = useState<{
    width: number;
    height: number;
  }>({
    height: 0,
    width: 0,
  });

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (isMobileRef.current === true) return;
    setFocusPos({ x: event.pageX, y: event.pageY });
  }, []);

  const handleScroll = useCallback(() => {
    const scrollX = window.scrollX - scrollRef.current.x;
    const scrollY = window.scrollY - scrollRef.current.y;
    setFocusPos(({ x, y }) => ({
      x: x + scrollX,
      y: y + scrollY,
    }));
    scrollRef.current = { x: window.scrollX, y: window.scrollY };
  }, []);

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
    if (window.matchMedia('(pointer: coarse)').matches) {
      isMobileRef.current = true;
      setFocusPos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      setFilterEnabled(false);
    } else {
      console.log("it's not a touchscreen");
    }
    changeAudio('/assets/intensify.mp3');
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <PagesContext.Provider
      value={{
        spring,
        focusPos,
        changeAudio,
        playMusic,
        handleMouseOverEvent,
        handleMouseOutEvent,
        setFilterEnabled,
        mainContainerSize,
        setMainContainerSize,
        isMobileRef,
        scrollRef,
      }}
    >
      <audio className="absolute z-10" ref={audioRef} controls></audio>
      {props.children}
    </PagesContext.Provider>
  );
};

export { PagesContext, PagesContextProvider };
