import React from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faCodePullRequest, faCodeMerge, faCodeBranch, faTerminal, faCode } from '@fortawesome/free-solid-svg-icons';
import { faReact, faNodeJs, faJsSquare, faCss3, faHtml5, faAws, faGithub, faGitlab, faNpm, faStackOverflow, faBootstrap, faFontAwesome, faGitSquare } from '@fortawesome/free-brands-svg-icons'
import MySQL from '../Images/mysql_icon.png';
import JQuery from '../Images/jquery.png';
import VSCode from '../Images/vscode.png';
import Postman from '../Images/postman_icon.png';

export default function Skills() {
    return (
        <>
            <div className='grid-container'>
                <div className='grid-item'>
                    <FontAwesomeIcon icon={faJsSquare} />
                </div>
                <div className='grid-item'>
                    <FontAwesomeIcon icon={faCss3} />
                </div>
                <div className='grid-item'>
                    <FontAwesomeIcon icon={faHtml5} />

                </div>
                <div className='grid-item'>
                    <FontAwesomeIcon icon={faReact} />

                </div>
                <div className='grid-item'>
                    <FontAwesomeIcon icon={faNodeJs} />
                </div>

                <div className='grid-item'>
                    <img src={JQuery} />
                </div>
                <div className='grid-item'>
                <FontAwesomeIcon icon={faAws} />
                </div>

                <div className='grid-item'>
                    <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png" />
                </div>
                <div className='grid-item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                </div>
                <div className='grid-item'>
                    <img src={MySQL} />
                </div>
                <div className='grid-item'>
                <FontAwesomeIcon icon={faGithub} />
                </div>
                <div className='grid-item'>
                <FontAwesomeIcon icon={faGitlab} />
                </div>
                <div className='grid-item'>
                <FontAwesomeIcon icon={faNpm} />
                </div>
                <div className='grid-item'>
                <FontAwesomeIcon icon={faCodeBranch} />
                </div>
                <div className='grid-item'>
                <FontAwesomeIcon icon={faCodePullRequest} />
                </div>
                <div className='grid-item'>
                <FontAwesomeIcon icon={faCodeMerge} />
                </div>
                <div className='grid-item'>
                <FontAwesomeIcon icon={faStackOverflow} />
                </div>
                <div className='grid-item'>
                <FontAwesomeIcon icon={faBootstrap} />
                </div>
                <div className='grid-item'>
                <FontAwesomeIcon icon={faFontAwesome} />
                </div>
                <div className='grid-item'>
                    <img src={VSCode} />
                </div>
                <div className='grid-item'>
                    <img src={Postman} />
                </div>
                <div className='grid-item'>
                <FontAwesomeIcon icon={faCode} />
                </div>
                <div className='grid-item'>
                <FontAwesomeIcon icon={faGitSquare} />
                </div>
                <div className='grid-item'>
                <FontAwesomeIcon icon={faTerminal} />
                </div>


            </div>
        </>
    );
};