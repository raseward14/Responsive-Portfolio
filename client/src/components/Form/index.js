import React from "react";

// exports Input, TextArea, and FormBtn
export function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
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
            className="btn btn-success"
        >
            {props.children}
        </button>
    )
}

