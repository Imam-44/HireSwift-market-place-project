import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const HomeLayouts = () => {
  return (
     <>
      <header>
        <Navbar/>
      </header>

     <main>
         <Outlet/>
     </main>

     <footer>
       <Footer/>
     </footer>

     </>
  );
};

export default HomeLayouts;