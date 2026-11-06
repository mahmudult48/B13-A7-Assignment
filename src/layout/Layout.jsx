import React from 'react';
import Navber from '../components/shared/Navber';
import { Outlet } from 'react-router';
import Footer from '../components/shared/Footer';

const Layout = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;