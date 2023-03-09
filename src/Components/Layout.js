// import React from 'react';
// // import { Outlet } from 'react-router-dom';
// import Navbar from './Navbar';

// const { BrowserRouter, Route, Switch } = require('react-router-dom');

// const Layout = () => (
//   <div className="wrapper">
//     <Navbar />
//     <Outlet />
//   </div>
// );
// export default Layout;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <div className="wrapper">
    <Navbar />
    <Outlet />
  </div>
);

export default Layout;
