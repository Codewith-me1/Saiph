'use client';
import React from 'react';
import styles from './style.module.css';
import Link from 'next/link';

export default function Project({ index, title, href, setModal }) {
  
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <Link href={href}>
        <h2>{title}</h2>
      </Link>

      <p>Saas Aplication</p>
    </div>
  );
}
