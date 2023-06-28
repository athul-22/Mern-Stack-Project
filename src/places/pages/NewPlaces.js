import React from 'react';
import './NewPlaces.css';
import Input from '../../shared/FormElements/input';

const NewPlaces = () => {
  return (
    <form className='place-form'>
      <Input element="input" type="text" label="title" validators={[]} errorText="enter a valid text"/>
    </form>
  );
};

export default NewPlaces