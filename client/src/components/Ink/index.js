import React, { useEffect, useState } from "react";
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTint, faEyeDropper } from '@fortawesome/free-solid-svg-icons'

// exports Ink dropdown
const Ink = (props) => {
    // const [backgroundColor, setBackgroundColor] = useState('');
    useEffect(() => {
    })

    // When the user clicks on the button, toggle between hiding and showing the dropdown content
    const inkFunction = () => {
        document.getElementById("inkDropdown").classList.toggle("show");
    }

    // Close the dropdown menu if the user clicks outside of it
    document.addEventListener("click", e => {
        const isDropdownButton = e.target.matches("data-dropdown-button")
        if (!isDropdownButton && e.target.closest("data-dropdown") != null) return

        let currentDropdown
        if (isDropdownButton) {
            currentDropdown = e.target.closest("data-dropdown")
            currentDropdown.classList.toggle('active')
        }

        document.querySelectorAll("data-dropdown.active").forEach(dropdown => {
            if(dropdown === currentDropdown) return
            dropdown.classList.remove("active")
        })
    })

    const myDefaultStyle = {
        color:  "Tan",
        fontSize: "2em"
    };
    const myRedStyle = {
        color: "Tomato",
        fontSize: "2em"
    };
    const myGreenStyle = {
        color: "Green",
        fontSize: "2em"
    };
    const myOrangeStyle = {
        color: "Orange",
        fontSize: "2em"
    };const myPinkStyle = {
        color: "Pink",
        fontSize: "2em"
    };const myBlueStyle = {
        color: "Blue",
        fontSize: "2em"
    };

    return (
        <div className="dropdown" data-dropdown>
            <button onClick={inkFunction} className="dropbtn" style={{color:"black", fontSize:"2em", backgroundColor:'inherit'}}><FontAwesomeIcon className="fa-circle" icon={faEyeDropper} data-dropdown-button/></button>
            <div id="inkDropdown" className="dropdown-content">
                <a>
                    <span style={myRedStyle}>
                        <FontAwesomeIcon className="fa-circle" icon={faTint} />
                    </span>
                </a>
                <a>
                    <span style={myGreenStyle}>
                        <FontAwesomeIcon className="fa-circle" icon={faTint} />
                    </span>
                </a>
                <a>
                    <span style={myBlueStyle}>
                        <FontAwesomeIcon className="fa-circle" icon={faTint} />
                    </span>
                </a>
                <a>
                    <span style={myOrangeStyle}>
                        <FontAwesomeIcon className="fa-circle" icon={faTint} />
                    </span>
                </a>
                <a>
                    <span style={myPinkStyle}>
                        <FontAwesomeIcon className="fa-circle" icon={faTint} />
                    </span>
                </a>
            </div>
        </div>
    );
};

export default Ink;