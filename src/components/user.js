import React from 'react'


const User = ({ user, toDelete }) => (
    <li>
        <span onClick={toDelete}>{user.username}</span> - {user.email}
        {user.admin ? '(admin)' : ''}
    </li>
)


export default User