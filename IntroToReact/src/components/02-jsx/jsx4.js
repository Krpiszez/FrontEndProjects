import React from 'react'

const Jsx4 = () => {
    const user = {
        name: "John Doe",
        email: "john@example.com",
        occupation: "Godfather of the Developers",
        age: 18
    }
    
    const error = true;

  return (
    <div>
        {user.age >= 18 && <h1>The content for 18 or older!</h1>}
        {user.age > 18 || <h1>The content for 17 or younger?!</h1>}
        {error && <p>An error Occured!</p>}
    </div>
  )
}

export default Jsx4;