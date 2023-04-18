import React from 'react'

const Stats = (props) => {
  return (
    <div>
        <div>
            <h2>{props.stat}</h2>
            <span>{props.title}</span>
        </div>
</div>
  )
}

export default Stats