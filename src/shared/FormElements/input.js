import React, { useReducer , useEffect, useState } from "react";
import { validate } from "../util/validator";
import './input.css';

const inputReducer = (state,action ) => {
    switch(action.type){
        case 'change': 
        return{
            ...state,
            value: action.val,
            isValid:validate(action.val , action.validators)
        };
        case 'TOUCH':
            return{
                ...state,
                isTouched: true

            }
        default:
            return state;
    }
}

const Input = props => {

    const [inputState,dispatch] = useReducer(inputReducer, {value:'',isTouched: false, isValid: false});
    // const [valid, isValid ] = inputState()

    const {id, onInput } = props;
    const {valid , isValid } = inputState

    useEffect(() => {
        onInput( id, valid , isValid )
    },[id, valid, isValid, onInput]);

    const changeHandler = event =>{
        dispatch({type:'change', val: event.target.value , validators:props.validators})
    }

    const touchHandler = () => {
        dispatch({
            type:'TOUCH'
        })
    }

    const element = props.element === 'input' ?
    (<input 
        id={props.id} 
        type={props.type} 
        placeholder={props.placeholder} 
        onChange={changeHandler} 
        value={inputState.value}
        onBlur={touchHandler}
        /> )  :

    ( <textarea 
        id={props.id} 
        rows={props.rows || 3} 
        value={inputState.value}
        onBlur={touchHandler}
        />);

   return( <div className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}>
        <label htmlFor={props.id}>{props.label}</label>
        {element}
        {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>)
}

export default Input