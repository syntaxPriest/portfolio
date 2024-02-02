import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './input.css';
import './mobile.css'
import MainAppBody from './components/mainAppComp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <MainAppBody>
      </MainAppBody>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
