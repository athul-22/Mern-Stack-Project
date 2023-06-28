import React from "react";
import { ReactDOM } from "react";
import './Model.css'

const ModelOverlay = props => {

    const content = (
        <div className={`model ${props.className}`} style={props.style}></div>
        
        )

    return ReactDOM.createPortal(content,document.getElementById("model-hook"));
}

const Model = props => {

}

export default Model;