import React from 'react'
import { Container } from 'react-bootstrap'
import { Content, Localization, Theme } from '../../components'

const Home = () => {
    return (
        <Container fluid className={` h-100 p-3`}>
            <div className='d-flex justify-content-between'>
                <Theme />
                <Localization />
            </div>
            <Content />
        </Container>
    )
}

export default Home