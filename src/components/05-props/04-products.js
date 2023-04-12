import React from 'react'

const Products = ({name, children}) => {
  return (
    <div>
        {name} *** {children}
    </div>
  )
}

export default Products