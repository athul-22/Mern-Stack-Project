import React from 'react'
import UsersItem from './UsersItem'
import "../components/UsersList.css"

const UsersList = props => {
    if (props.items.length === 0) {
        return (
            <div>No Users found !</div>
        )
    }

    return (
        <ul className='user-list'>
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