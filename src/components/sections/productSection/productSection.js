'use client';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import Project from './project';
import Modal from './modal';

const projects = [
  {
    title: 'Phoenix HIS',
    src: '/images/pheonix.png',
    color: '#000000',
    href: '/product/phoenix',
  },
  {
    title: 'Raven BMS',
    src: '/images/raven.png',
    color: '#8C8C8C',
    href: '/product/raven',
  },
];

export default function ProductSection() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main>
      <div className={styles.title}>
      <h2>| Products</h2>
        <p className={styles.info}>
          Revolutionize your business operations with our cutting-edge
        Complete Management and Accounting SAAS Applications<br />
        Seamlessly crafted by our expert team, this innovative
        solution empowers you to effortlessly manage every
        aspect of your enterprise.<br />
        From streamlining financial transactions to optimizing
        resource allocation, experience unparalleled efficiency
        and precision in one comprehensive platform.</p>
    
    
    </div>
    <div className={styles.product}>
      
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
              href={project.href}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
      </div>
      </main>
  );
}
