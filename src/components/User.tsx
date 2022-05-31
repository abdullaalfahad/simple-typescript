import React, { FC } from 'react';
import UserModel from '../types/Models';

interface Props {
    user: UserModel
}

const User: FC<Props> = ({ user }) => {
    return (
        <div style={{ backgroundColor: 'grey', padding: '20px', margin: '10px 0' }}>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
            <h3>{user.phone}</h3>
            <h3>{user.website}</h3>
        </div>
    );
};

export default User;