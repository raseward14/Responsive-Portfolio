import React, { useState, useEffect } from "react";
import "./style.css";
import Ink from '../Ink'

export const DateTime = () => {
    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)

        return function cleanup() {
            clearInterval(timer)
        };
    });

    return (
            <div className="clearfix">
                <p className="dateTime"> Date: {date.toLocaleDateString()}</p>
                <p className="dateTime"> Time: {date.toLocaleTimeString()}</p>
                {/* <Ink></Ink> */}
            </div>
    );
};

export default DateTime;