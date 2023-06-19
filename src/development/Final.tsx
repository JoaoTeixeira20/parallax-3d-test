import React from 'react';
import { PagesContextProvider } from '@/context/PagesContext';
import { HashRouter } from 'react-router-dom';
import Root from '@/routes/Root';
import ReactDOM from 'react-dom/client';

const App = () => (
  <PagesContextProvider>
    <HashRouter>
      <Root />
    </HashRouter>
  </PagesContextProvider>
);

const root = ReactDOM.createRoot(
  document.getElementById('root') || document.createElement('div')
);
root.render(<App />);
