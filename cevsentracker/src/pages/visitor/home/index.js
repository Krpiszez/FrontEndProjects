import React from 'react'
import {   Slider, Spacer, WhatWeDo, Habits, PopularHabits } from '../../../components'

const HomePage = () => {
    return (
        <div>
            <Slider />
            <Spacer />
            <WhatWeDo />
            <Spacer />
            <PopularHabits />
        </div>
    )
}

export default HomePage