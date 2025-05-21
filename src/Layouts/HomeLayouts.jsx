import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const HomeLayouts = () => {
  return (
     <>
      <header>
        <Navbar/>
      </header>

     <main>
         <Outlet/>
     </main>

     </>
  );
};

export default HomeLayouts;