import React, { useState, useEffect } from 'react';
import './style.css'
import Pdf from '../Documents/Richard_Seward_Web_Dev.docx.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare, faHackerrank, faCodepen, faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons'

function Icons({ backgroundColor }) {
    const [iconHover, setIconHover] = useState('orange');
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
            link: 'https://codepen.io/your-work'
        },
        {
            icon: faFreeCodeCamp,
            link: 'https://www.freecodecamp.org/fcce7e5be83-605e-4df1-abe6-c86887f3dbb4'
        },
        {
            icon: faFile,
            link: Document
        }
    ];

    useEffect(() => {
        switch (backgroundColor) {
            case '#7BDCB5':
              setIconHover('teal-icon');
              break;
            case '#00D084':
              setIconHover('green-icon');
              break;
            case '#8ED1FC':
              setIconHover('light-blue-icon');
              break;
            case '#0693E3':
              setIconHover('blue-icon');
              break;
            case '#ABB8C3':
              setIconHover('gray-icon');
              break;
            case '#EB144C':
              setIconHover('red-icon');
              break;
            case '#F78DA7':
              setIconHover('pink-icon');
              break;
            case '#9900EF':
              setIconHover('indigo-icon');
              break;
            case '#05F725':
              setIconHover('lime-icon');
              break;
            default:
              setIconHover('orange-icon');
              break;
          }
          console.log(`from nav component ${backgroundColor}`);
    }, [backgroundColor]);


    return (
        <>
            <div className="wrapper">
                {iconsAndLinks.map((site, key) => {
                    return (
                        <div key={key}>
                            <span>
                                <a target='null' href={`${site.link}`}>
                                    <FontAwesomeIcon className={`${iconHover}`} icon={site.icon} />
                                </a>
                            </span>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
export default Icons;