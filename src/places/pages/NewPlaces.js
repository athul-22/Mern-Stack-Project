import React, { useCallback } from 'react';
import { VALIDATOR_REQUIRE } from '../../shared/util/validator';
import './NewPlaces.css';
import Input from '../../shared/FormElements/input';

const NewPlaces = () => {

  const titleInputHandler = useCallback((id, value, isValid) => {

  }, []);

  const descriptionHandler = useCallback((id, value, isValid) => {

  }, []);


  return (
    <form className='place-form'>
      <Input
        id="title"
        element="input"
        type="text" label="title"
        errorText="enter a valid text"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={titleInputHandler}
      />
      <Input
        id="description"
        element="textArea"
        type="text"
        label="title"
        errorText="enter a valid text"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={descriptionHandler}
      />
    </form>
  );
};

export default NewPlaces