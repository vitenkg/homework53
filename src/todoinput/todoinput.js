import React from 'react';
import './todoinput.css'

const Todoinput = props => {
    return (
        <div className="inputDate">
            <input
                type="text"
                value={props.todoText}
                onChange={props.readValue}>
            </input>
        </div>
    );
};

export default Todoinput;