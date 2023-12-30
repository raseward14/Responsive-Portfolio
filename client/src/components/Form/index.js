import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


// exports Input, TextArea, and FormBtn
export function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props}/>
            {/* <button>
                <FontAwesomeIcon className='i' icon={faMagnifyingGlass} />
            </button> */}
        </div>
    );
};

export function TextArea(props) {
    return (
        <div className="form-group">
            <textarea className="form-control" rows="15" {...props} />
        </div>
    );
};

export function FormBtn(props) {
    const [myColor, setMyColor] = useState('orange')

    useEffect(() => {
        switch(props.backgroundColor) {
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
        }
        console.log(`from addContact component ${props.backgroundColor}`);
        console.log(`hovervstyle im adding to the button ${myColor}`);
    }, [props.backgroundColor])


    return (
        <button
            {...props}
            style={{ float: "none", marginBottom: 10 }}
            className={`btn ${myColor}`}
        >
            {props.children}
        </button>
    )
}

