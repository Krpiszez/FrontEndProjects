import React from 'react';
import { Logo } from '../../../assets/image';
import './style.scss';

const LoadingPage = () => {
  return (
    <div className='loading-page'>
      <div className='loader'>
        <div className='rolling-square-container'>
          <div className='rolling-square'></div>
        </div>
        <img src={Logo} alt='Loading...' title='Loading...' />
      </div>
    </div>
  );
}

export default LoadingPage;
