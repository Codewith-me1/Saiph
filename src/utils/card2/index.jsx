/* eslint-disable @next/next/no-img-element */

import React from 'react';
import styles from './style.module.css';
import { urlFor } from '../../../sanity/client'
import Link from 'next/link';

const Card2 = ({title, description , image, slug}) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.cardtitle}>{ title}</h1>
      <img  src={urlFor(image).url()} alt="image" className={styles.cardimg} />

      <div className={styles.cardbody}>
        <p className={styles.carddesc}>
        {description}
        </p>
        <Link  href={ slug}>

          <button className={styles.cardbtn}>Learn 
          <svg
          className={styles.cardarw}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
            </svg>
          </button>
          </Link>
      </div>
    </div>
  );
};

export default Card2;
