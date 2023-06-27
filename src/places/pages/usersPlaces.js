import React from 'react'
import PlaceList from '../components/PlaceList'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const UsersPlaces = () => {


  const DUMMY_PLACES = [
    {
      id: 'p1',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg',
      address: "test adddress",
      location: {
            lat:3003333,
            lng:72.333,
      },
    },
    {
      creator: 'p2',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg',
      address: "test adddress",
      location: {
            lat:3003333,
            lng:72.333,
      },
    },
  ]

  const userId = useParams().uid;
  const loadPlaces = DUMMY_PLACES.filter(place => place.creator ===userId)

  return <PlaceList item={loadPlaces}/>
}

export default UsersPlaces