import React from "react";
import './style.css'

// exports Ink dropdown
const Ink = (props) => {

    // When the user clicks on the button, toggle between hiding and showing the dropdown content
    const inkFunction = () => {
        document.getElementById("inkDropdown").classList.toggle("show");
    }

    // Close the dropdown menu if the user clicks outside of it
    window.onClick = function(event) {
        if (!event.target.matches(".dropbtn")) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i=0, i<dropdowns.length; i++;) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains("show")) {
                    openDropdown.classList.remove("show")
                }
            }
        }
    }

    return(
        <div className="dropdown">
            <button onClick={inkFunction} className="dropbtn">Dropdown</button>
            <div id="inkDropdown" className="dropdown-content">
                <a>1</a>
                <a>2</a>
                <a>3</a>
                <a>4</a>
                <a>5</a>
            </div>
        </div>
    );
};

export default Ink;