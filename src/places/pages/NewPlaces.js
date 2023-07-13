import React, { useCallback, useReducer } from 'react';
import Input from '../../shared/FormElements/input';
import Button from '../../shared/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validator';
import './NewPlaces.css';
import { useForm } from '../../shared/hooks/form-hooks';


const NewPlace = () => {

  const [formState, inputHandler] = useForm({
    title: {
      value: '',
      isValid:false
    },
    description: {
      value: '',
      isValid:false
    },
    address: {
      value: '',
      isValid:false
    }
  },false
  );
  
  const placeSubmitHandler = event =>{
    event.PreventDeault();
    console.log(formState.inputs)
  }

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}

      />
      <Input
        id="description"
        element="textArea"
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
      />
      <Button type="submit" >
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;