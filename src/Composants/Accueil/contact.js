import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function Contact({ id }) {
  return (
    <div id={id} className='Contact'>
        <h2>Contact</h2>

    <div className='textcontact'>
        <p>Envie de me contacter ?</p>

        <a className='lienemail' href="mailto:martelcedric@sfr.fr">
        Envoie-moi un mail    <FontAwesomeIcon icon={faEnvelope} style={{color: "#00000"}}/>
        </a>
    </div>
    </div>
  )
}
