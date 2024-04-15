import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faGit } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Competences({ id }) {
  return (
    <div id={id} className='Competences'>
        <h2>Compétences</h2>
        <div className='cardcompétences'>
            <div className='hardskill'>
                <h3>Hard Skill</h3>
                <div className='textehard'>
                <p><FontAwesomeIcon icon={faHtml5} style={{ color: '#74C0FC' }} /> Html</p>
                <p><FontAwesomeIcon icon={faSass} style={{ color: '#74C0FC' }} /> Scss</p>
                <p><FontAwesomeIcon icon={faJs} style={{ color: '#74C0FC' }} /> JavaScript</p>
                <p><FontAwesomeIcon icon={faReact} style={{ color: '#74C0FC' }} /> React</p>
                <p><FontAwesomeIcon icon={faNodeJs} style={{ color: '#74C0FC' }} /> Node.Js</p>
                <p><FontAwesomeIcon icon={faServer} style={{ color: '#74C0FC' }} /> MongoDb</p> 
                <p><FontAwesomeIcon icon={faGit} style={{ color: '#74C0FC' }} /> Git</p>
                <p><FontAwesomeIcon icon={faGithub} style={{ color: '#74C0FC' }} /> GitHub</p>
                </div>
            </div>
            <div className='softskill'>
                <h3>Soft Skill</h3>
                <p>Patient,Curieux et toujours a la recherche d'apprendre,</p>
                <p>je sais m'adapter facilement a une situation ou un travail en equipe.</p>
                <p>je suis quelqu'un de serieux et autonome.
                </p>

            </div>
        </div>
    </div>
  )
}
