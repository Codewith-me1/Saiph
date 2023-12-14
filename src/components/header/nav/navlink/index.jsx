import styles from './navlink.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../../anim';

export default function Navlink({data, isActive, setSelectedIndicator}) {
  
    const { title, href, index} = data;
  
    return (
      <motion.div
        className={styles.navlink}
        onMouseEnter={() => { setSelectedIndicator(href) }}
        custom={index} variants={slide}
        initial="initial"
        animate="enter"
        exit="exit">
        <motion.div
          variants={scale}
          animate={isActive ? "open" : "closed"}
          className={styles.indicator}>
        </motion.div>
        <Link href={href} >{title}</Link>
      </motion.div>
    )
  }