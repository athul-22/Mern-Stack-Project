import React from 'react'
import PlaceList from '../components/PlaceList'

const usersPlaces = () => {

  const DUMMY_PLACES = [
    {
      id: 'p1',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empir',
      address: "test adddress",
      location: {
            lat:3003333,
            lng:72.333,
      },
    }
  ]

  return <PlaceList items={DUMMY_PLACES}/>
}

export default usersPlaces