import React, { useCallback, useReducer } from 'react';
import { VALIDATOR_REQUIRE } from '../../shared/util/validator';
import './NewPlaces.css';
import Input from '../../shared/FormElements/input';
import Button from '../components'

const formReducer = (state,action) => {
  switch(action.type){
    case 'INPUT_CHANGE':
      let formValid = true;
      for (const inputId in state.inputs){
        if(inputId === action.inputId ){
          formIsValid = formIsValid && action.isValid
        }
        else{
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return{
        ...state, 
        inputs: {
          ...state.inputs,
          [action.inputId]: {value: action.value, isValid: action.isValid};

        }
        isValid: formIsValid;
      };
    default:
      return state;
  }
}

const NewPlaces = () => {

  const [ formState , dispatch ] = useReducer(formReducer,{
    inputs:{
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },
    isValid:
  });

  const inputInputHandler = useCallback((id, value, isValid) => {
    dispatch({type: 'INPUT_CHANGE',value: value , isValid: isValid , inputId: inputId  })
  }, []);

  const descriptionHandler = useCallback((id, value, isValid) => {

  }, []);


  return (
    <form className='place-form'>
      <Input
        id="title"
        element="input"
        type="text" 
        label="Title"
        errorText="enter a valid text"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputInputHandler}
      />
      <Input
        id="description"
        element="textArea"
        type="text"
        label="Description"
        errorText="enter a valid text"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputInputHandler}
      />
    </form>
  );
};

export default NewPlaces