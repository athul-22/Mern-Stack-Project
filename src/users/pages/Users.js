import React from 'react'
import UsersList from '../components/UsersList'

const Users = () => {
  const USERS =[{
    id: 'u1',
    name: 'Athul Nambiar',
    image: 'https://media.licdn.com/dms/image/D5603AQEkDDWTYSaj7g/profile-displayphoto-shrink_400_400/0/1682436233552?e=1692835200&v=beta&t=i__7sOTN4Np8LXmP1LLQHMyqTd3aM7u7mb1x7it0s3A',
    place: 3
  },
  {
    id: 'u1',
    name: 'Athul Nambiar',
    image: 'https://media.licdn.com/dms/image/D5603AQEkDDWTYSaj7g/profile-displayphoto-shrink_400_400/0/1682436233552?e=1692835200&v=beta&t=i__7sOTN4Np8LXmP1LLQHMyqTd3aM7u7mb1x7it0s3A',
    place: 3
  }]
  return <UsersList items={USERS}/>
}

export default Users