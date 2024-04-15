import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className='footer'>
        <div className='copy'>
        <p>© 2024 Cédric Martel</p>
    </div>
    <div className='lienext'>
        <a href='https://github.com/azotaz' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} style={{ color: '#000000' }} /></a>
        <a href='https://www.linkedin.com/in/c%C3%A9dric-martel-4b505b203/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} style={{ color: '#000000' }} /></a>
    </div>

    </div>
  )
}
