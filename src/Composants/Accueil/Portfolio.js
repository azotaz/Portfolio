import React from 'react'
import { Link } from 'react-router-dom';
import projet from '../../projet.json'

export default function PortFolio({ id }) {
  return (
    <div id={id} className='Portfolio'>
        <h2>Portfolio</h2>

        <div className='cardProjet'>
        {
           projet.map( projet => {
            return(
        <Link to={`/Portfolio/${projet.id}`} key={projet.id}>
           <div className='cardindividuel' >         
            <img className="ImgProjet" src={projet.cover} alt="Proto du Projet"/>
           <p>{projet.title}</p>      
        </div> 
        </Link>  
            )
          })
        }
      </div>
    </div>
  )
}
