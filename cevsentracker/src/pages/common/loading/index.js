import React from 'react'
import { Spinner } from 'react-bootstrap'
import { Logo } from '../../../assets/image';
import './style.scss';

const LoadingPage = () => {
    return (
        <div className='loading-page'>
            <Spinner animation='border' variant='primary' />
            <img src={Logo} alt="Loading..." title="Loading..." />
        </div>
    )
}

export default LoadingPage;