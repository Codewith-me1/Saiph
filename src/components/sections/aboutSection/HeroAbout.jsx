import React from 'react';
import Typewriter from '@/utils/Typewriter';
import Image from 'next/image';
import Carousel from '@/components/carousel';



const HeroAbout = () => {
  return (
    <div className=" min-h-screen text-white pt-[40px]">
      <div className="flex px-4">
        <div className="w-1/2 flex justify-end">
          <Image
            src="/saiph.jpg"
            width={90}
            height={90}
            alt="saiph logo"
            className="animate-spin"
            style={{ animationDuration: '5s' }}
          />
        </div>

        <div className="w-1/2 font-normal text-4xl pt-6 from-[#6366F1] via-[#D946EF] to-[#FB7185] bg-gradient-to-r bg-clip-text text-transparent ">
          <Typewriter
            sentence="| SAiPH"
            typingSpeed={70}
            pauseTime={3000}
            eraseSpeed={30}
            loop={true}
           
          />
        </div>
      </div>
     

      <div className="p-4 md:p-10 lg:p-20 text-sm md:text-lg lg:text-xl">
        <p>
          At SAiPH, we are committed to pushing the boundaries of what&apos;s
          possible in the world of software development. As a dynamic and forward-thinking company,
          we pride ourselves on delivering cutting-edge solutions tailored to meet
          the unique needs of our clients.<br />
          Our team of seasoned software developers is passionate about crafting robust
          and scalable applications that not only meet but exceed industry standards.
          Whether you&apos;re a startup looking to make your mark or an established
          enterprise seeking to optimize operations,
          SAiPH is your trusted partner on the journey to digital excellence.
        </p>
      </div>
      <div>
      
      <Carousel/>
      
      
      </div>
     
     
    </div>
  );
};

export default HeroAbout;
