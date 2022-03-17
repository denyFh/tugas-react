import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATASET = [
  {id: 1, title: "Membuat Komponen", completed: true},
  {id: 2, title: "Unit Testing", completed: false},
  {id: 3, title: "Setup Development Environment", completed: true},
  {id: 4, title: "Deploy Ke Server", completed: false},
]

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATASET}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
