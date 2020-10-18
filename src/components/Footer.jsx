import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

import '../styles/components/footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>Created with ❤ by Luís Clício.</p>
      <nav className='footer__links'>
        <a
          href='http://github.com/DarkTechLC'
          target='_blank'
          rel='noopener noreferrer'
          className='footer__links__link'
        >
          <FiGithub size={32} color='#d7dae0' />
        </a>
        <a
          href='http://linkedin.com/in/luisclicio'
          target='_blank'
          rel='noopener noreferrer'
          className='footer__links__link'
        >
          <FiLinkedin size={32} color='#d7dae0' />
        </a>
      </nav>
    </footer>
  );
}
