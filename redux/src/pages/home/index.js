import React from 'react'
import { Container } from 'react-bootstrap'
import { Content, Localization, Theme } from '../../components'
import { useSelector } from 'react-redux'

const Home = () => {

    const { theme } = useSelector(state=>state.theme)

    return (
        <Container fluid className={`bg-${theme} h-100 p-3`}>
            <div className='d-flex justify-content-between'>
                <Theme />
                <Localization />
            </div>
            <Content />
        </Container>
    )
}

export default Home