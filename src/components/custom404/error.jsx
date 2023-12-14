'use client'

import React, { useEffect } from 'react';
import gsap from 'gsap';

const Custom404 = () => {
  

  return (
    <main>
    <div className="text-center  ">

    <h1 className="mb-4 text-6xl pt-24 font-semibold text-red-500">404</h1>
    <p className="mb-4 text-lg pt-8 text-gray-600">Oops! Looks like you are lost.</p>
    <div className="animate-bounce">
      <svg className="mx-auto h-16  w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    </div>
    <p className="mt-12 text-gray-600">Lets get you back <a href="/" className="text-blue-500">home</a>.</p>
  </div>
    
    
    
    </main>
 


  );
};

export default Custom404;
