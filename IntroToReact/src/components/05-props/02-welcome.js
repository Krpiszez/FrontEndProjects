import React from 'react'

const Welcome2 = (props) => {
    const { firstName, lastName } = props;
  return (
    <div>
        <h2>
            Welcome2 {firstName} {lastName}
        </h2>
    </div>
  )
}

export default Welcome2