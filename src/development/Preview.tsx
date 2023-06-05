import * as React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorStackTrace from './ErrorStackTrace/ErrorStackTrace';
import GlobalStyle from '@/GlobalStyles';
import ParallaxSceneWrapper from '@/components/ParallaxSceneWrapper/ParallaxSceneWrapper';
// import AudioAnalyser from '@/components/AudioAnalyser/AudioAnalyser';

const App = () => (
  <>
    <GlobalStyle />
    <ErrorStackTrace>
      <ParallaxSceneWrapper/>
      {/* <AudioAnalyser/> */}
    </ErrorStackTrace>
  </>
);

const root = ReactDOM.createRoot(
  document.getElementById('root') || document.createElement('div')
);
root.render(<App />);
