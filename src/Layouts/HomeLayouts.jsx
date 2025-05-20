import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const HomeLayouts = () => {
  return (
     <>
      <header>
        <Navbar/>
      </header>
      <Outlet/>

     </>
  );
};

export default HomeLayouts;