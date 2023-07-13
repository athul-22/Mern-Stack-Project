import React from 'react'
import PlaceList from '../components/PlaceList'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { DUMMY_PLACES } from './updatePlace'

const UsersPlaces = () => {


  const userId = useParams().uid;

 const loadPlaces = DUMMY_PLACES.filter(place => place.creator === userId );

  return <PlaceList item={loadPlaces}/>
}

export default UsersPlaces