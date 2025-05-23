import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Hero.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const slides = [
  {
    title: 'Find Trusted Freelancers',
    description:
      'Connect instantly with skilled freelancers ready to take on your small or large tasks. From graphic design to writing and coding, our platform matches you with the right talent at the right price, ensuring quality and reliability every step of the way.',
    image: '/assets/slide-1.jpg',
  },
  {
    title: 'Post Tasks with Ease',
    description:
      'Easily post any kind of task, set your budget, and describe your needs in just a few steps. Watch freelancers submit competitive offers and choose the one that fits best. Task posting has never been this simple and efficient.',
    image: '/assets/slide-2.jpg',
  },
  {
    title: 'Grow Your Freelance Career',
    description:
      "Freelancers can browse a wide range of available jobs, apply quickly, and build their profiles with client reviews. Whether you're just starting out or growing your business, this is the perfect platform to showcase your skills and land jobs.",
    image: '/assets/slide-3.jpg',
  },
];


const Hero = () => {
  return (
    <div className="w-full h-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }} 
        loop={true}
        className="w-full h-[600px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={`slide-${index}`}
                className="w-full h-full object-cover object-top "
              />
              <div className="absolute inset-0 bg-black/60 flex items-center px-8 md:px-20">
                <div className="text-white max-w-xl space-y-6 animate-fade-in-left">
                  <h2 className="text-3xl text-pink-500 md:text-5xl font-bold transition-all duration-1000">
                    {slide.title}
                  </h2>
                  <p className="text-lg  md:text-xl whitespace-pre-line transition-opacity duration-1000">
                    {slide.description}
                  </p>
                  <div className="flex gap-4">
                    <button className="bg-pink-500 text-white px-10 py-2 rounded-full hover:bg-pink-400 transition duration-300 cursor-pointer">
                      Explore
                    </button>
                    <button className="bg-transparent border border-white px-10 py-2 rounded-full hover:bg-white hover:text-black transition duration-300 cursor-pointer">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
