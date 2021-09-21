import React from "react";
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTint, faEyeDropper } from '@fortawesome/free-solid-svg-icons'

// exports Ink dropdown
const Ink = (props) => {

    // When the user clicks on the button, toggle between hiding and showing the dropdown content
    const inkFunction = () => {
        document.getElementById("inkDropdown").classList.toggle("show");
    }

    // Close the dropdown menu if the user clicks outside of it
    window.onClick = function (event) {
        if (!event.target.matches(".dropbtn")) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0, i < dropdowns.length; i++;) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains("show")) {
                    openDropdown.classList.remove("show")
                }
            }
        }
    }

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
        <div className="dropdown">
            <button onClick={inkFunction} className="dropbtn" style={myDefaultStyle}><FontAwesomeIcon icon={faEyeDropper} rotate=""/></button>
            <div id="inkDropdown" className="dropdown-content">
                <a>
                    <span style={myRedStyle}>
                        <FontAwesomeIcon icon={faTint} />
                    </span>
                </a>
                <a>
                    <span style={myGreenStyle}>
                        <FontAwesomeIcon icon={faTint} />
                    </span>
                </a>
                <a>
                    <span style={myBlueStyle}>
                        <FontAwesomeIcon icon={faTint} />
                    </span>
                </a>
                <a>
                    <span style={myOrangeStyle}>
                        <FontAwesomeIcon icon={faTint} />
                    </span>
                </a>
                <a>
                    <span style={myPinkStyle}>
                        <FontAwesomeIcon icon={faTint} />
                    </span>
                </a>
            </div>
        </div>
    );
};

export default Ink;