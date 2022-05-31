import React, { useEffect, useState } from 'react';
import UserModel from '../types/Models';
import User from './User';

const Users = () => {
    const [users, setUsers] = useState<UserModel[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

    return (
        <div>
            <h1>All Users: {users.length}</h1>
            <div>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;