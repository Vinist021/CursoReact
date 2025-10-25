import React from 'react'

const UserList = () => {

    const users = [
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Charlie', age: 35 },
    ];

  return (
    <div>
        <h1>Users</h1>
        {users.map((user) => 
        <ul key={user.id}>
            <li>
                {user.name}
            </li>
        </ul>)}
    </div>
  )
}

export default UserList