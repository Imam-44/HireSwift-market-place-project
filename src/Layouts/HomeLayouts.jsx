import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const HomeLayouts = () => {
  return (
     <>
      <Navbar/>
      <Outlet/>
      
     </>
  );
};

export default HomeLayouts;