import React from 'react'

export default function Présentation({ id }) {
  return (
    <div id={id} className='Présentation'>
        <h2>Présentation</h2>
        <p className='phrasedaccroche'>Fan d'informatique depuis mon plus jeune âge !</p>
        <p className='texte'>J'ai fait le souhait de me reconvertir après une carrière dans le domaine des Energies.
        Pour cela je me suis formé aux techniques de codage en autodidacte puis j'ai suivi une formation chez OpenClassRooms de 6 mois en qualité de developpeur web.
        J'ai 30 ans et vis en Loire Atlantique.
        </p>
        <p className='passion'> Je suis quelqu'un de simple qui s'intéresse à tout. Je fais du sport plusieurs fois par semaine, 
        j'aime les animaux, cuisiner , voyager et découvrir , l'informatique, les jeux vidéo, profiter de la plage et de ses
        activités quand la saison s'y prête.
        </p>
    </div>
  )
}
