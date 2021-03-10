import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CarProvider } from './providers/CarContextApi';

ReactDOM.render(
  <CarProvider>
      <App />
  </CarProvider>,
  document.getElementById('root'),
);
