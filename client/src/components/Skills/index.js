import React from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodePullRequest, faCodeMerge, faCodeBranch, faTerminal, faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { faReact, faNodeJs, faGithub, faGitlab, faNpm, faBootstrap } from '@fortawesome/free-brands-svg-icons'
import JQuery from '../Images/jquery.png';
import stackOverflow from '../Images/stack_overflow_icon.png';
import aws from '../Images/aws.png';
import mySQL from '../Images/mysql_icon.png';
import git from '../Images/git.png';
import postman from '../Images/postman.png';
import vscode from '../Images/visual-studio-code.png';
import html from '../Images/html.png';
import js from '../Images/js.png';
import RESTfulAPI from '../Images/rest-api.png';
import css from '../Images/css.png';
import typescript from '../Images/typescript-icon.png';
import angular from '../Images/angular-original.svg';
import postgresql from '../Images/postgresql.png';
import cursorAi from '../Images/cursor-ai.png';
import docker from '../Images/docker.png';
import react from '../Images/react.png';
import python from '../Images/python.png';

export default function Skills() {
    return (
        <>
            <div className='grid-container'>
                <div className='grid-item'>
                    <img src={angular} />
                </div>
                <div className='grid-item'>
                    <img src={js} />
                </div>
                <div className='grid-item'>
                    <img src={typescript}/>
                </div>
                <div className='grid-item'>
                    <img src={react} />
                </div>
                <div className='grid-item'>
                    <img src={css} />
                </div>
                <div className='grid-item'>
                    <img src={html} />
                </div>
                <div className='grid-item'>
                    <FontAwesomeIcon icon={faNodeJs} style={{ color: '#00ff00' }} />
                </div>
                <div className='grid-item'>
                    <FontAwesomeIcon icon={faNpm} style={{ color: '#dc143c' }} />
                </div>
                <div className='grid-item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                </div>
                <div className='grid-item'>
                    <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png" />
                </div>
                <div className='grid-item'>
                    <img src={postgresql} />
                </div>
                <div className='grid-item'>
                    <img src={mySQL} />
                </div>
                <div className='grid-item'>
                    <img src={RESTfulAPI} />
                </div>
                <div className='grid-item'>
                    <FontAwesomeIcon icon={faGithub} />
                </div>
                <div className='grid-item'>
                    <FontAwesomeIcon icon={faGitlab} style={{ color: '#ff8c00' }} />
                </div>
                <div className='grid-item'>
                    <img src={JQuery} />
                </div>
                <div className='grid-item'>
                    <FontAwesomeIcon icon={faBootstrap} style={{ color: '#7b68ee' }} />
                </div>
                <div className='grid-item'>
                    <FontAwesomeIcon icon={faFontAwesome} style={{ color: '#1e90ff' }} />
                </div>
                <div className='grid-item'>
                    <img src={aws} />
                </div>
                <div className='grid-item'>
                    <img src={git} />
                </div>
                <div className='grid-item'>
                    <FontAwesomeIcon icon={faCodeMerge} style={{ color: '#eb5f34' }} />
                </div>
                <div className='grid-item'>
                    <FontAwesomeIcon icon={faCodePullRequest} style={{ color: '#eb5f34' }} />
                </div>
                <div className='grid-item'>
                    <FontAwesomeIcon icon={faCodeBranch} style={{ color: '#eb5f34' }} />
                </div>
                <div className='grid-item'>
                    <img src={postman} />
                </div>
                <div className='grid-item'>
                    <img src={cursorAi} />
                </div>
                <div className='grid-item'>
                    <img src={vscode} />
                </div>
                <div className='grid-item'>
                    <FontAwesomeIcon icon={faTerminal} />
                </div>
                <div className='grid-item'>
                    <img src={docker} />
                </div>
                <div className='grid-item'>
                    <img src={stackOverflow} />
                </div>
                <div className='grid-item'>
                    <img src={python} />
                </div>


            </div>
        </>
    );
};