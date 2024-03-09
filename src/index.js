import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App5 from './App5';

import Router from './Router';
// import './Shoppingcart.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <Calc a={10} b={20} />
  // </React.StrictMode>  

  // <React.StrictMode>
  //   {/* <App3 user={["john","mike","cat"]} /> */}
  //   <App3 students={{name: 'john' , age:25}} />
  // </React.StrictMode>  

  //  <React.StrictMode>
  //   <App4 />
  // </React.StrictMode>

  // <React.StrictMode>
  //   <App5 />
  // </React.StrictMode>

  // <React.StrictMode>
    <Router  />
//  </React.StrictMode> 
 
);