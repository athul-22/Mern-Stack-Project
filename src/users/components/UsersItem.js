import React from 'react'
import "../components/UsersItem.css"
import Avatar from '../../shared/components/UIElements/Avatar/Avatar'
import Card from '../../shared/components/UIElements/Cards/Card'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import '../components/UsersItem.css';

const UsersItem = props => {
  return (

      <li className='user-item'>
          <Card className='user-item__content'>
          <Link to={`/${props.id}/places`}>
          <div className='user-item__image'>
            <Avatar image={props.image} alt={props.name}/>
            {/* <img src={props.image} alt={props.name} /> */}
          </div>
          <div className='user-item__info'>
            <h2>{props.name}</h2>
            <h3>{props.placeCount}</h3> {props.placeCount ===1 ? 'Place' : 'Places'}
          </div>
          </Link>
          </Card>
       
      </li>
     
  )
}

export default UsersItem