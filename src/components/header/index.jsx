'use client';

import styles from './header.module.scss';
import { useEffect, useState, useRef } from 'react';
import Nav from './nav';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);

  const handleClick = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isActive) {
      // If menu is open, addg an additional listener to close it when the button is clicked again
      document.addEventListener('click', handleClick);
    } else {
      // If menu is closed, removeg the additional listener
      document.removeEventListener('click', handleClick);
    }

    return () => {
      // Cleangup the additional listener when the component unmounts
      document.removeEventListener('click', handleClick);
    };
  }, [isActive]);

  useEffect(() => {
    if (isActive) {
      // Cleanup the additional listener when the pathname changes
      setIsActive(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <div className={styles.main}> 
        <div className={styles.header}>
        <div className={styles.logoContainer}><Link href='/'>SAiPH</Link></div>
          <div onClick={handleClick} className={styles.button}>
           
          
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ''
              }`}
            ></div>
            </div>
           
        </div>
      </div>

      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
