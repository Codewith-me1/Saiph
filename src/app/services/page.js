







'use client'
import styles from './page.module.scss';
import Card from '@/components/card';
import { useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';  // Added useState
import Lenis from '@studio-freight/lenis';
import client from '../../../sanity/client';

const Services = () => {
  const [data, setData] = useState([]);  // Use state to store fetched data

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await client.fetch(`*[_type == "services"]`);
        setData(res);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);  // Empty dependency array to ensure useEffect runs only once

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);  // Empty dependency array to ensure useEffect runs only once

  return (

    <main ref={container}>
    <h1 className={styles.title}>| Services</h1>
    <span className={styles.text}>
      <p>At SAiPH, we go beyond providing services,
        we deliver solutions that empower your business for long-term success.<br/>
        Explore the possibilities with our comprehensive range of services designed
        to elevate your digital presence.</p>
    </span>
      <div  className={styles.service}>
      {data.map((val, i) => {
        const targetScale = 1 - (i * 0.05);
        return (
          <Card
            key={`p_${i}`}
            i={i}
            title={val.title}  // title 
            description={val.description}  //  description
            src={val.mainImage}  // mainImage
            slug={val.slug.current}
             //  url for more desc
            color={val.color}  //  color in #code
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
      </div>

    </main>

    
  );
};

export default Services;
