import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

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
      id: 'p2',
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
      id: 'p3',
      title: 'pink tree',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/1121098-pink-nature-wallpaper-1920x1080-lockscreen.jpg',
      address: "test adddress",
      location: {
            lat:3003333,
            lng:72.333,
      },
    },
  ]


const UpdatePlace = () => {
   const placeId = useParams().placeId;
   const identifiedPlace = DUMMY_PLACES.find(p=>p.id === placeId);
    return <h1>update place</h1>
}

if(!placeId){
    return<h2>Could not find place</h2>
}

export default UpdatePlace;