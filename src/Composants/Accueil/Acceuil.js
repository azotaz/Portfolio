import React from 'react'
import Photo from '../../Photos/moi-zoo.avif'

export default function Apropos({ id }) {
  return (
    <div id={id} className='Acceuil'>
      <div className='texte'>
      <h1>Bonjour,  </h1>
      <p className='texte-déroulant'></p>
      <p className='texte-déroulant'>je suis Cédric MARTEL, Développeur web junior passionné </p>
      </div>
      <img src={Photo} alt="Photo de moi"/>
    </div>
  )
}
