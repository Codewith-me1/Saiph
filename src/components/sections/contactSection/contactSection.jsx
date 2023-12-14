'use client';

import styles from './contact.module.scss';
import Image from 'next/image';
import Rounded from '@/utils/roundBtn/Rounded';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '@/utils/Magnetic';
import Link from 'next/link';

export default function ContactSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  return (
    <motion.div ref={container} className={`${styles.contact} `}>
      <div className={`${styles.body}`}>
        <div className={`${styles.title}`}>
          <span>
            <div className={`${styles.imageContainer}`}>
              <Image
                src="/saiph.jpg"
                width={100}
                height={100}
                alt={'image'}
                className="animate-spin"
                style={{ animationDuration: '10s' }}
              />
            </div>
            <h2>Brief with Us</h2>
          </span>

          <motion.div style={{ x }} className={`${styles.buttonContainer} `}>
          <Link href="/contact">
            <Rounded backgroundColor={'#334BD3'} className={styles.button}>
             
                <p>Get in touch</p>
             
              </Rounded>
              </Link>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 
              8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 
              8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 
              7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className={styles.nav}>
          <Rounded>
            <p>info@saiphtechnologies.com</p>
          </Rounded>
          <Rounded>
            <p>+91 62784 7430</p>
          </Rounded>
        </div>
        <div className={styles.info}>
          <div>
            <span>
              <h3>Version</h3>
              <p>2023 © Edition</p>
            </span>
            <span>
              <h3>Version</h3>
              <p>All Rights Reserved.</p>
            </span>
          </div>
          <div>
            <span>
              <h3>socials</h3>
              <Magnetic>
                <p>Discord</p>
              </Magnetic>
            </span>
            <Magnetic>
              <p>Telegram</p>
            </Magnetic>
            <Magnetic>
              <p>Dribbble</p>
            </Magnetic>
            <Magnetic>
              <p>Linkedin</p>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
