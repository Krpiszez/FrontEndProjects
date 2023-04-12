import React from 'react'
import Welcome from './01-welcome';

const Greetings = () => {
  return (
    <div>
        <h1 style={{
            color: 'blue'
        }}>GREETINGS COMPONENT</h1>
        <Welcome
            firstName="John"
            lastName="Doe"
        />
        <Welcome
            firstName="Jason"
            lastName="Doe"
        />
    </div>
  )
};

export default Greetings;