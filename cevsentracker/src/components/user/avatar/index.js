import { AccountCircle } from '@mui/icons-material';
import React from 'react'
import { Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const UserAvatar = () => {
    const { user } = useSelector(state => state.auth);
    const { firstName, lastName, email, builtIn } = user;

    return (
        <div className='user-avatar'>
            <AccountCircle style={{ width: "120px", height: "120px" }} />
            <h4>
                {firstName} {lastName}
            </h4>
            <p style={{ overflowWrap: "break-word" }}>
                <em>{email}</em>
            </p>
            {
                builtIn && (
                    <Alert variant='warning mt-5'>
                        Built-in accounts cannot be updated!
                    </Alert>
                )
            }
        </div>
    )
}

export default UserAvatar