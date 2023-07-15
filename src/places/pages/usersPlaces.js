import React from 'react'
import PlaceList from '../components/PlaceList'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire    Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg',
    address: "test adddress",
    location: {
      lat: 3003333,
      lng: 72.333,
    },
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg',
    address: "test adddress",
    location: {
      lat: 3003333,
      lng: 72.333,
    },
  },
  {
    id: 'p3',
    title: 'pink tree',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/1121098-pink-nature-wallpaper-1920x1080-lockscreen.jpg',
    address: "test adddress",
    location: {
      lat: 3003333,
      lng: 72.333,
    },
  },
]

const UsersPlaces = () => {

  const userId = useParams().uid;

  const loadPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

  return <PlaceList item={loadPlaces} />
}

export default UsersPlaces