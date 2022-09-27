import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import DemoFuncCom from './Components/DemoFuncCom';
// import { Demoheader } from './Components/Demoheader';
// import App from './Components/App';
import ReactBuoi1 from './baitapReactBuoi1/ReactBuoi1';
import BaitapReactBuoi2 from './baitapReactBuoi2/BaitapReactBuoi2';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='baitap1' element={<ReactBuoi1/>}></Route>
    <Route path='baitap2' element={<BaitapReactBuoi2/>}></Route>
  </Routes>
  </BrowserRouter>
);

