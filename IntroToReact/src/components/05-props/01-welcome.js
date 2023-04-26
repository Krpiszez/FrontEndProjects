import React from 'react'

const Welcome1 = (props) => {
    // console.log(props)
  return (
    <div>
        <h2>
            Welcome1 {props.firstName} {props.lastName}
        </h2>
        
    </div>
  )
};

export default Welcome1;