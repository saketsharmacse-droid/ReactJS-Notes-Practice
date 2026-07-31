import React from 'react'; //core foubdational library hai.
import ReactDOM from 'react-dom/client'; //react ka implementation hai web pe.
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

