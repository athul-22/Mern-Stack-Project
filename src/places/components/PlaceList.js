import React from 'react'
import './PlaceItem.css'
import Card from '../../shared/components/UIElements/Cards/Card'

const PlaceList = props => {
  if(props.item.length === 0){
    return <div className='place-list center'>No places found</div>
  }
  return(
    <div>
        <Card>
            
        </Card>
    </div>
  )
}

export default PlaceList