import React from "react";
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
    return (
        <button
            {...props}
            style={{ float: "none", marginBottom: 10 }}
            className="btn"
        >
            {props.children}
        </button>
    )
}

