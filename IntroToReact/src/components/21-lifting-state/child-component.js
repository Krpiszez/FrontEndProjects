import React from 'react'
import { Button } from 'react-bootstrap'

const ChildComponent = ({handleClick}) => {
  return (
    <>
        <h2 className='my-4'>Data Binding</h2>
        <Button onClick={()=>handleClick(2)}>Set Counter</Button>
    </>
  )
}

export default ChildComponent