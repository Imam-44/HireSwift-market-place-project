import React from 'react';
import Hero from '../Components/Hero';
import { useLoaderData } from 'react-router';
import TaskCard from '../Components/FeaturedTask';

const Home = () => {
  const tasks = useLoaderData();
  console.log(tasks);
  return (
     <>
       <Hero/>
         <div className='w-11/12 mx-auto py-9 text-center py-18'>
           <h1 className='font-bold text-amber-800 '>Boost Your Working Flow
           </h1>
           <h1 className='text-4xl font-bold text-pink-700'>Your One-Stop Online Marketplace for Everything You Need</h1>
           <p className='text-gray-500'>Your premier online marketplace. Find quality products and services, connect with trusted sellers, and enjoy a seamless shopping experience today.</p>
         </div>
       <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 w-11/12 mx-auto'>

        
          {
            tasks.map(task => <TaskCard key={task._id} task={task}></TaskCard>)
          }
       </div>
     </>
  );
};

export default Home;