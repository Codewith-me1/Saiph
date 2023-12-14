
'use client'

import React, { useEffect, useState } from 'react';
import Typewriter from '@/utils/Typewriter';
import client from '../../../../sanity/client';
import Card2 from '@/utils/card2';

const ServiceSection = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await client.fetch(`*[_type == "services"]`);
        setProductData(res);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <section className="vg">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4">
          <Typewriter
          sentence="| Services"
          typingSpeed={70}
          pauseTime={3000}
          eraseSpeed={30}
          loop={false}
         
        />
            
           
          
          
          
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed  text-sm md:text-lg lg:text-xl">
            At SAiPH, we go beyond providing services; we deliver solutions
            that empower your business for long-term success.
            Explore the possibilities with our comprehensive range of
            services designed to elevate your digital presence.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 p-10 gap-20 align-center px-20">
          {productData.map((val) => (
            <Card2
              key={val._id} // Ensure each item in the list has a unique key
              image={val.mainImage}
              title={val.title}
              description={val.description}
              slug={ 'services/' + val.slug.current}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
