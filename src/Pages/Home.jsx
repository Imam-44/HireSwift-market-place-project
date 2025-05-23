import React from 'react';
import Hero from '../Components/Hero';
import { useLoaderData } from 'react-router';
import TaskCard from '../Components/FeaturedTask';
import FeaturedSection from '../Components/FeaturedSection';
import HowItWorks from '../Components/HowItWorks';
import TopFreelancers from '../Components/TopFreelancers';

const Home = () => {
 
  return (
     <>
       <Hero/>
       <HowItWorks/>
      <FeaturedSection/>
      <TopFreelancers/>
     </>
  );
};

export default Home;