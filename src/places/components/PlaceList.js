import React from 'react'
import './PlaceList.css'
import Card from '../../shared/components/UIElements/Cards/Card'
import Placeitem from './Placeitem'
import Button from '../../shared/FormElements/Button'

const PlaceList = props => {
  if(props.item.length === 0){
    return <div className='place-list center'>
       <center> <Card>
        No places found !
        <br/>
        <h3>Add new places !</h3>
        <br/>
        <Button to="/places/new">Add Place</Button>
        </Card></center>
    </div>
  }

  return(
    <div className='place-list'>
        {props.item.map( place=> <Placeitem 
        key={place.id} id={place.id} 
        image={place.imageUrl} 
        title={place.title} 
        description={place.description} 
        address={place.address} 
        creatorID={place.creator} 
        coordinates={place.location}  /> )}
    </div>
  )
}

export default PlaceList