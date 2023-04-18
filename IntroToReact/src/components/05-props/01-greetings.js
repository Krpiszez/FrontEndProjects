import React from 'react'
import Welcome1 from './01-welcome';
import Welcome2 from './02-welcome';
import Welcome3 from './03-welcome';
import Products from './04-products';

const Greetings = () => {
  return (
    <div>
        <h1 style={{
            color: 'blue'
        }}>GREETINGS COMPONENT</h1>
        <Welcome1
            firstName="John"
            lastName="Doe"
        />
        <Welcome2
            firstName="Jason"
            lastName="Doe"
        />
        <Welcome3
            firstName="Jonathan"
            lastName="Doe"
        />
        <Products name="Sara"/>
        <Products name="Jason">
        HELLO WORLD
        <br/>
        <Welcome3
            firstName="Jonathan"
            lastName="Doe"
        />
        </Products>
    </div>
  )
};

export default Greetings;