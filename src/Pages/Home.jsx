import React from 'react';
import Hero from '../Components/Hero';
import { useLoaderData } from 'react-router';
import TaskCard from '../Components/FeaturedTask';
import FeaturedSection from '../Components/FeaturedSection';

const Home = () => {
 
  return (
     <>
       <Hero/>
      <FeaturedSection/>

     </>
  );
};

export default Home;