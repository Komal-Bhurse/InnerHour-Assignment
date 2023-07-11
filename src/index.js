import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import PomodoroContext from './context-api/PomodoroContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <PomodoroContext Children={<App />}/>
    </BrowserRouter>
  </React.StrictMode>
);

