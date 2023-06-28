import React, { useState } from "react";
import { ReactDOM } from "react";
import './Model.css'
import Backdrop from "./backDrop";
import { CSSTransition } from "react-transition-group";

const ModelOverlay = props => {

    

    const content = (
        <div className={`model ${props.className}`} style={props.style}>
            <header className={`model__header ${props.headerClass}`}>
                <h2>{props.header}</h2>
            </header>
            <form onSubmit={props.onSubmit ? props.onSubmit : (event) => event.preventDefault()}>
                <div className={`model__content ${props.contentClass}`}>
                    {props.children}
                </div>
                <footer className={`model__footer ${props.footerClass}`}>
                    {props.footer}
                </footer>
            </form>

        </div>

    )

    return ReactDOM.createPortal(content, document.getElementById("model-hook"));
}

const Model = props => {
    return <React.Fragment>
        {props.show && <Backdrop onClick={props.onCancel} />}
        <CSSTransition
            in={props.show}
            mountOnEnter
            unmountOnExit
            timeout={200}
            classNames="model"
        >
            <ModelOverlay {...props} />
        </CSSTransition>
            
    </React.Fragment>
}

export default Model;