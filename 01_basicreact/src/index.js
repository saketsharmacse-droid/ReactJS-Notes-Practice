import React from 'react'; //core foubdational library hai.
import ReactDOM from 'react-dom/client'; //react ka implementation hai web pe.
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//line number 5: yaha pe ek memory mei ek dom bna deta hai react.
//jaise js browser mei dom create krta hai, react ek virtual dom use krta hai memory mei create krke.

