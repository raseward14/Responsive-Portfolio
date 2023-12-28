import React, { useState, useEffect } from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint, faEyeDropper } from '@fortawesome/free-solid-svg-icons'

// exports Ink dropdown
const Ink = ({ setBackgroundColor, backgroundColor }) => {
    const colors = ['#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF', '#05F725', '#FCB900'];
    const [myColor, setMyColor] = useState('orange');

    // When the user clicks on the button, toggle between hiding and showing the dropdown content
    const inkFunction = () => {
        document.getElementById("inkDropdown").classList.toggle("show");
    };

    // When the user clicks a color, the background changes
    const handleClick = (color) => {
        localStorage.setItem('your_color', color);
        setBackgroundColor(color);
    };

    // Close the dropdown menu if the user clicks outside of it **NOT WORKING**
    // document.addEventListener("click", e => {
    //     const isDropdownButton = e.target.matches("data-dropdown-button");
    //     if (!isDropdownButton && e.target.closest("data-dropdown") != null) return

    //     let currentDropdown
    //     if (isDropdownButton) {
    //         currentDropdown = e.target.closest("data-dropdown")
    //         currentDropdown.classList.toggle('active')
    //     };

    //     document.querySelectorAll("data-dropdown.active").forEach(dropdown => {
    //         if (dropdown === currentDropdown) return
    //         dropdown.classList.remove("active")
    //     });
    // });

    useEffect(() => {
        switch (backgroundColor) {
            case '#7BDCB5':
              setMyColor('teal-button');
              break;
            case '#00D084':
              setMyColor('green-button');
              break;
            case '#8ED1FC':
              setMyColor('light-blue-button');
              break;
            case '#0693E3':
              setMyColor('blue-button');
              break;
            case '#ABB8C3':
              setMyColor('gray-button');
              break;
            case '#EB144C':
              setMyColor('red-button');
              break;
            case '#F78DA7':
              setMyColor('pink-button');
              break;
            case '#9900EF':
              setMyColor('indigo-button');
              break;
            case '#05F725':
              setMyColor('lime-button');
              break;
            default:
              setMyColor('orange-button');
              break;
          };
          console.log(`from proj-filters ${backgroundColor}`);
    }, [backgroundColor]);

    return (
        <div className="dropdown" data-dropdown>
            <button onClick={inkFunction} className={`dropbtn ${myColor}`}><FontAwesomeIcon className="fa-circle" icon={faEyeDropper} data-dropdown-button /></button>
            <div id="inkDropdown" className="dropdown-content">
                {colors.map((color, key) => {
                    return (
                        <div className={`${myColor}`} key={key} data-color={color} onClick={() => handleClick(color)}>
                            <span  style={{ color: `${color}`, fontSize: '2em', position: 'relative', top: '10px' }}>
                                <FontAwesomeIcon className='fa-circle' icon={faTint} />
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Ink;