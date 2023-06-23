import React from 'react'
import UsersList from '../components/UsersList'

const Users = () => {
  const USERS =[{
    id: 'u1',
    name: 'Max Schwarz',
    image: 'https://images.unsplash.com/photo-1612833603929-4b6b7e2b2b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    places: 3
  }]
  return <UsersList items={USERS}/>
}

export default Users