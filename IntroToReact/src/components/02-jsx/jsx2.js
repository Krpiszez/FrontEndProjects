import React from 'react';

const Jsx2 = () => {
    const user = {
        name: "John Doe",
        email: "john@example.com",
        occupation: "Godfather of the Developers"
    }


    return (
        <>
            <div>Name: {user.name}</div>
            <div>Email: {user.email}</div>
            <div>Occupation: {user.occupation}</div>
        </>
    )
};

export default Jsx2;