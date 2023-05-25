import React from 'react'
import { BestOffers, PageHeader, Spacer, WhatWeDo, WhoWeAre } from '../../../components'
import { config } from '../../../config'

const AboutPage = () => {
    const { projectDetails: { about: { title } } } = config;

    return (
        <>
            <PageHeader title={title} />
            <Spacer />
            <WhoWeAre />
            <Spacer />
            <BestOffers />
            <Spacer />
            <WhatWeDo />
        </>
    )
}

export default AboutPage