import React from 'react'
import './PlaceItem.css'
import Card from '../../shared/components/UIElements/Cards/Card'

const Placeitem = props => {
  return (
    <li className='place-item'>
        <div className='place-item__image'>
            <img src={props.image}/>
        </div>
        <div className='place-item__info'>
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
        </div>
        <div className='place-item__actions'>
            <button>View on Map</button>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    </li>
  )
}

export default Placeitem