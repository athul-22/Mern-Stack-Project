import React from 'react'
import UsersItem from './UsersItem'
import "./UsersList.css"

const UsersList = props => {
    if (props.items.length === 0) {
        return (
            <div>No Users found !</div>
        )
    }

    return (
        <ul className='users-list '>
            {props.items.map(users => (
                <UsersItem 
                    key={users.id} 
                    id={users.id} 
                    image={users.image} 
                    name={users.name} 
                    placeCount={users.place} />
            ))}
        </ul>
    )
}

export default UsersList