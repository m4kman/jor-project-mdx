import React from 'react';
import Link from 'next/link';

import Logo from '@/components/Logo';

import DecorativeSwoops from './DecorativeSwoops';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.wrapper}>
      <DecorativeSwoops />
      <div className={styles.content}>
        <div>
          <Logo mobileAlignment="center" />
          <p className={styles.attribution}>
            Blog created as the final project for {' '}
            <a href="https://www.joyofreact.com/" target="_blank">
              The Joy of React
            </a>{' '}
            course by {' '}
            <a href="https://www.joshwcomeau.com/" target="_blank">
              Josh W. Comeau.
            </a>
          </p>
        </div>
        <nav>
          <h2 className={styles.linkHeading}>Links</h2>
          <ul className={styles.linkList}>
            <li>
              <Link href="/rss">RSS feed</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
