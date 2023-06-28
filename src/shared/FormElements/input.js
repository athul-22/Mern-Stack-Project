import React from "react";
import './input.css'

const Input = props => {

    const element = props.element === 'input' ? <Input id={props.id} type={props.type} placeholder={props.placeholder} /> : <textarea id={props.id} rows={props.rows || 3}/> ;

    <div className={`form-control`}>
        <label htmlFor={props.id}>{props.label}</label>
        {props.element}
    </div>
}

export default Input