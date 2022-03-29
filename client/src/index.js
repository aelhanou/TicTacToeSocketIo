import React from 'react';
import ReactDOM from 'react-dom';
// import { SocketProvider } from 'socket.io-react';
// import { io } from 'socket.io-client';
import reportWebVitals from './reportWebVitals';
import socketIOClient from "socket.io-client";
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';





// export const socket = io.connect("localhost:4443");

// socket.on("connect", () => {
//   console.log('connected');
// });





ReactDOM.render(
  // <SocketProvider socket={socket}>
  <React.StrictMode>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </React.StrictMode>
  // </SocketProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
