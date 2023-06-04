import * as React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorStackTrace from './ErrorStackTrace/ErrorStackTrace';
import GlobalStyle from '@/GlobalStyles';
import ParallaxSceneWrapper from '@/components/ParallaxSceneWrapper/ParallaxSceneWrapper';

const App = () => (
  <>
    <GlobalStyle />
    <ErrorStackTrace>
      <ParallaxSceneWrapper/>
    </ErrorStackTrace>
  </>
);

const root = ReactDOM.createRoot(
  document.getElementById('root') || document.createElement('div')
);
root.render(<App />);
