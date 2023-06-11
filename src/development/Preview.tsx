import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorStackTrace from './ErrorStackTrace/ErrorStackTrace';
import { PagesContextProvider } from '@/context/PagesContext';
import Root from '@/routes/Root';
import { BrowserRouter } from 'react-router-dom';
import AudioAnalyser from '@/components/AudioAnalyser/AudioAnalyser';

const App = () => (
  <div className='min-w-full min-h-screen flex'>
    <ErrorStackTrace>
      {/* <AudioAnalyser/> */}
      <PagesContextProvider>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </PagesContextProvider>
    </ErrorStackTrace>
  </div>
);

const root = ReactDOM.createRoot(
  document.getElementById('root') || document.createElement('div')
);
root.render(<App />);
