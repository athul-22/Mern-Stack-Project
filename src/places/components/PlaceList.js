import React from 'react'
import './PlaceItem.css'
import Card from '../../shared/components/UIElements/Cards/Card'
import Placeitem from './Placeitem'

const PlaceList = props => {
  if(props.item.length === 0){
    return <div className='place-list center'>
        <Card>
        No places found
        <button>Share Place</button>
        </Card>
    </div>
  }

  return(
    <div className='place-list'>
        {props.item.map( place=> <Placeitem key={place.id} id={place.id} image={place.imageURL} title={place.title} description={place.description} address={place.address} creatorID={place.creator} coordinates={place.location}  /> )}
    </div>
  )
}

export default PlaceList