import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
//import styled from 'styled-components';
import projet from '../../projet.json';
import ImageCarousel from './Carrousel';
import fleche from '../../Photos/flechegaucheblanc.png'


export default function Projet() {

const { id } = useParams();

const Projet = projet.find(projet => projet.id === id);
   
    // Si aucun logement trouvé, afficher un message d'erreur
if (!Projet) {
      return (
        <div>
          <h1>Logement introuvable</h1>
        </div>
      );
    }
    
     // Affiche les informations du logement
return (
    <div className='pageprojet'>
     <Link to={`/`}> <img className='flecheretour' src={fleche} alt='retour'/> </Link>
        <h1>{Projet.title}</h1>
        <div className='Carrousel'>
        <ImageCarousel className='imgcarousel' pictures ={Projet.pictures} />
        <p>{Projet.description}</p>
        <div className="btntype">
        {Projet.type.map((type, index) => (
          <p className="type" key={index}>{type}</p>
        ))}
      </div>
        </div>
    </div>
  )
}
