import React from "react";
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint, faEyeDropper } from '@fortawesome/free-solid-svg-icons'

// exports Ink dropdown
const Ink = ({ setBackgroundColor }) => {
    const colors = ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF', '#05F725'];

    // When the user clicks on the button, toggle between hiding and showing the dropdown content
    const inkFunction = () => {
        document.getElementById("inkDropdown").classList.toggle("show");
    };

    // When the user clicks a color, the background changes
    const handleClick = (color) => {
        setBackgroundColor(color);
        console.log(color);
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