import React, { useEffect, useState } from "react";
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTint, faEyeDropper } from '@fortawesome/free-solid-svg-icons'

// exports Ink dropdown
const Ink = (props) => {
    const colors = ['tomato', 'green', 'blue', 'orange', 'pink'];
    const [currentcolor, setCurrentColor] = useState('tan')

    // When the user clicks on the button, toggle between hiding and showing the dropdown content
    const inkFunction = () => {
        document.getElementById("inkDropdown").classList.toggle("show");
    };

    // When the user clicks a color, the background changes
    const handleClick = async (color) => {
        setCurrentColor(color);
        console.log(currentcolor);
        // switch(currentcolor) {
        //     case 'tomato':
        //         console.log('tomato');
        //         break;
        //     case 'green':
        //         console.log('green');
        //         break;
        //     case 'blue':
        //         console.log('blue');
        //         break;
        //     case 'orange':
        //         console.log('orange');
        //         break;
        //     case 'pink':
        //         console.log('pink');
        //         break;
        //     default:
        //         console.log('tan');
        // }
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

    return (
        <div className="dropdown" data-dropdown>
            <button onClick={inkFunction} className="dropbtn" style={{ color: "black", fontSize: "2em", backgroundColor: 'inherit' }}><FontAwesomeIcon className="fa-circle" icon={faEyeDropper} style={{ backgroundColor: 'white' }} data-dropdown-button /></button>
            <div id="inkDropdown" className="dropdown-content">
                {colors.map((color, key) => {
                    return (
                        <div key={key} data-color={color} onClick={() => handleClick(color)}>
                            <span style={{ color: `${color}`, fontSize: '2em', backgroundColor: 'inherit' }}>
                                <FontAwesomeIcon className='fa-circle' icon={faTint} />
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Ink;