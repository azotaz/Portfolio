import React from 'react'

export default function Présentation({ id }) {
  return (
    <div id={id} className='Présentation'>
        <h2>Présentation</h2>
        <p className='phrasedaccroche'>Fan d'informatique depuis mon plus jeune age !</p>
        <p className='texte'>J'ai fais le souhait de me réorienter après une carriere dans le domaine des Energies,
        Pour cela je me suis former sur les bases en autodidacte puis suivi une formation chez OpenClassRooms de 6 mois en developpeur web.
        J'ai 30 ans et vie en Loire Atlantique.
        </p>
        <p className='passion'> Sinon je suis quelqu'un de simple qui m'intesse a tous. Je fais du sport plusieurs fois par semaine, 
        j'aime les animaux, cuisiner , voyager et découvrir , l'informatique et les jeux vidéo et profiter de la plage et de c'est 
        activités quand la saison ci prete.
        </p>
    </div>
  )
}
