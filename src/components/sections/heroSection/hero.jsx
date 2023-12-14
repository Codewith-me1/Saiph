'use client';

import React from 'react';



const heroContent = {
  intro: {
    title: 'Where Imagination Meets Innovation',
    subTitles: 'Welcome',
    description:
      'We believe that the fusion of creative imagination with cutting-edge innovation is the key to crafting groundbreaking solutions. We encourage our team to dream big and think creatively while leveraging the latest technologies to bring those ideas to life.',
  },
};

const Hero = () => {
  return (
    <section className=" bg-hero-pattern bg-cover " >
  
      <div className="relative container pt-40 px-4 items-center justify-center w-screen lg:flex lg:h-screen lg:w-screen md:flex">
      
        
        <div className="lg:w-4/12 z-3 ">
          {heroContent.intro.subTitles && (
            <span
             
              className="heroWc uppercase tracking-[3px] text-[16px] 
                                        mb-5 inline-block text-white"
            >
              {heroContent.intro.subTitles}
            </span>
          )}

          {heroContent.intro.subTitles && (
            <span
              
              className="heroTl  tracking-[2px] text-4xl md:text-3xl
                                         inline-block text-gray-200 sm:text-4xl
                                         lg:text-6xl w-auto lg:w-screen max-w-xl mb-4 md:mb-8"
            >
              {heroContent.intro.title}
            </span>
          )}

          {heroContent.intro.description && (
            <p
              
              className="heroDesc leading-relaxed  text-gray-200 
                                        w-auto lg:w-screen max-w-xl text-base
                                        lg:text-lg mb-0 lg:mb-0"
            >
              {heroContent.intro.description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
