import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WelcomePage from './WelcomePage';

const App = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./App")), 2000);
  });
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<WelcomePage />}>
      <App />
    </Suspense>
  </React.StrictMode>
);