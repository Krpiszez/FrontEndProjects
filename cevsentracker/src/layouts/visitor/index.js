import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../../components'

const VisitorLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default VisitorLayout