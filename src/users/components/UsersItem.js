import React from 'react'
import "../components/UsersItem.css"

const UsersItem = props => {
  return (

      <li className='user-item'>
        <div className='user-item__content'>
          <div className='user-item__image'>
            <img src={props.image} alt={props.name} />
          </div>
          <div className='user_item__info'>
            <h2>{props.name}</h2>
            <h4>{props.placeCount}</h4> {props.placeCount ===1 ? 'Place' : 'Places'}
          </div>
        </div>
      </li>
     
  )
}

export default UsersItem