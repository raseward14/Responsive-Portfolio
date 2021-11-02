import React, { useEffect, useState } from "react";
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTint, faEyeDropper } from '@fortawesome/free-solid-svg-icons'

// exports Ink dropdown
const Ink = (props) => {
    // const [backgroundColor, setBackgroundColor] = useState('');
    useEffect(() => {
    });

    const colors = ['tomato', 'green', 'blue', 'orange', 'pink'];

    // When the user clicks on the button, toggle between hiding and showing the dropdown content
    const inkFunction = () => {
        document.getElementById("inkDropdown").classList.toggle("show");
    };

    // Close the dropdown menu if the user clicks outside of it
    document.addEventListener("click", e => {
        const isDropdownButton = e.target.matches("data-dropdown-button");
        if (!isDropdownButton && e.target.closest("data-dropdown") != null) return

        let currentDropdown
        if (isDropdownButton) {
            currentDropdown = e.target.closest("data-dropdown")
            currentDropdown.classList.toggle('active')
        };

        document.querySelectorAll("data-dropdown.active").forEach(dropdown => {
            if (dropdown === currentDropdown) return
            dropdown.classList.remove("active")
        });
    });

    return (
        <div className="dropdown" data-dropdown>
            <button onClick={inkFunction} className="dropbtn" style={{ color: "black", fontSize: "2em", backgroundColor: 'inherit' }}><FontAwesomeIcon className="fa-circle" icon={faEyeDropper} style={{ backgroundColor: 'white' }} data-dropdown-button /></button>
            <div id="inkDropdown" className="dropdown-content">
                {colors.map((color, key) => {
                    return (
                        <a key={key}>
                            <span style={{ color: `${color}`, fontSize: '2em', backgroundColor: 'inherit' }}>
                                <FontAwesomeIcon className='fa-circle' icon={faTint} />
                            </span>
                        </a>
                    )
                })}
            </div>
        </div>
    );
};

export default Ink;