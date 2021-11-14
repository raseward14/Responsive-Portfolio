import React from 'react';
import Pdf from '../Documents/Richard_Seward_Web_Dev.docx.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faLink, faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare, faHackerrank, faCodepen, faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons'
import { Component } from 'react';

function Icons() {
    const iconsAndLinks = [
        {
            icon: faHackerrank,
            link: 'https://www.hackerrank.com/dashboard'
        },
        {
            icon: faLinkedin,
            link: 'https://www.linkedin.com/in/richard-seward-7b9336102/'
        },
        {
            icon: faGithubSquare,
            link: 'https://github.com/raseward14'
        },
        {
            icon: faCodepen,
            link: 'https://www.freecodecamp.org/fcce7e5be83-605e-4df1-abe6-c86887f3dbb4'
        },
        {
            icon: faFreeCodeCamp,
            link: 'https://www.freecodecamp.org/fcce7e5be83-605e-4df1-abe6-c86887f3dbb4'
        },
        {
            icon: faFile.icon,
            link: Document
        }
    ]
    return (
        <>
            <div className="wrapper">
                {iconsAndLinks.map((site, key) => {
                    <div key={key}>
                        <a target='null' href={site.link}>
                            <FontAwesomeIcon className={key} icon={site.icon} />
                        </a>
                    </div>
                })}
                <div>
                    <a target='null' href='https://www.hackerrank.com/dashboard' >
                        <FontAwesomeIcon className='one' icon={faHackerrank} />
                    </a>
                </div>
                <div>
                    <a target='null' href='https://www.linkedin.com/in/richard-seward-7b9336102/'>
                        <FontAwesomeIcon className='two' icon={faLinkedin} />
                    </a>
                </div>

                <div>
                    <a target='null' href='https://github.com/raseward14'>
                        <FontAwesomeIcon className='three' icon={faGithubSquare} />
                    </a>
                </div>

                <div>
                    <a target='null' href='https://codepen.io/your-work'>
                        <FontAwesomeIcon className='four' icon={faCodepen} />
                    </a>
                </div>
                <div>
                    <a target='null' href='https://www.freecodecamp.org/fcce7e5be83-605e-4df1-abe6-c86887f3dbb4'>
                        <FontAwesomeIcon className='five' icon={faFreeCodeCamp} />
                    </a>
                </div>
                <div>
                    <a target='_blank' href={Pdf}>
                        <FontAwesomeIcon className='six' icon={faFile} />
                    </a>
                </div>
            </div>
        </>
    )
};
export default Icons;