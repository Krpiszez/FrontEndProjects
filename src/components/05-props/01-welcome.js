import React from 'react'

const Welcome = (props) => {
    console.log(props)
  return (
    <div>
        Welcome {props.firstName} {props.lastName}
    </div>
  )
};

export default Welcome;