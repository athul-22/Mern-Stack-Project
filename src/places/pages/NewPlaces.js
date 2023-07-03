import React from 'react';
import { VALIDATOR_REQUIRE } from '../../shared/util/validator';
import './NewPlaces.css';
import Input from '../../shared/FormElements/input';

const NewPlaces = () => {
  return (
    <form className='place-form'>
      <Input element="input" type="text" label="title" errorText="enter a valid text" validators={[VALIDATOR_REQUIRE()]}/>
    </form>
  );
};

export default NewPlaces