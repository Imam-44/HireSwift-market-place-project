import React from 'react';
import Hero from '../Components/Hero';
import { useLoaderData } from 'react-router';
import TaskCard from '../Components/TaskCard';

const Home = () => {
  const tasks = useLoaderData();
  console.log(tasks);
  return (
     <>
       <Hero/>
         <div className='w-11/12 mx-auto py-9 text-center py-18'>
           <h1 className='font-bold text-pink-500 '>Boost Your Working Flow
           </h1>
           <h1 className='text-4xl font-bold'>Your One-Stop Online Marketplace for Everything You Need</h1>
           <p>Your premier online marketplace. Find quality products and services, connect with trusted sellers, and enjoy a seamless shopping experience today.</p>
         </div>
       <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 w-11/12 mx-auto'>

        
          {
            tasks.map(task => <TaskCard key={task._id} task={task}></TaskCard>)
          }
       </div>
     </>
  );
};

export default Home;