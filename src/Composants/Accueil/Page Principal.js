import React from 'react'
import Apropos from './Acceuil'
import Présentation from './Présentation'
import PortFolio from './Portfolio'
import Competences from './Competences'
import Contact from './contact'

export default function Accueil() {
  return (
    <div>
        <Apropos id="Acceuil"/>
        <Présentation id='Présentation'/>
        <PortFolio id='PortFolio'/>
        <Competences id='Competences'/>
        <Contact id='Contact'/>
    </div>
  )
}
