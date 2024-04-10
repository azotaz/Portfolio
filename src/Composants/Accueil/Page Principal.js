import React from 'react'
import Apropos from './Acceuil'
import Présentation from './Présentation'
import PortFolio from './Portfolio'

export default function Accueil() {
  return (
    <div>
        <Apropos id="Acceuil"/>
        <Présentation id='Présentation'/>
        <PortFolio id='PortFolio'/>
    </div>
  )
}
