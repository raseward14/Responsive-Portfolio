import React from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'

function MERN() {
    return (
        <div className='container'>
            <div className='icon-wrapper'>
                <img className='one mern-icon' src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png"/>
                <img className='two mern-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                <FontAwesomeIcon className='three mern-icon' icon={faReact} />
                <FontAwesomeIcon className='four mern-icon' icon={faNodeJs} />

            </div>
        </div>
    )
};
export default MERN;