import React from 'react';
import ReactDOM from 'react-dom/client';
// import DemoFuncCom from './Components/DemoFuncCom';
// import { Demoheader } from './Components/Demoheader';
// import App from './Components/App';
import ReactBuoi1 from './baitapReactBuoi1/ReactBuoi1';
import BaitapReactBuoi2 from './baitapReactBuoi2/BaitapReactBuoi2';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <div className='abc'>
    <ReactBuoi1/>
    <BaitapReactBuoi2/>
  </div>
);

