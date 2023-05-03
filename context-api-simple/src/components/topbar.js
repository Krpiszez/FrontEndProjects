import React, { useContext } from 'react'
import StoreContext from '../store'

const TopBar = () => {

  const store = useContext(StoreContext);

  const {currencies} = store;

  const formatCurrency = (currency) => {
    return(1 / currencies[currency]).toFixed(2);
  }

  return (
    <header className='p-3 text-white bg-primary'>
      <nav className='d-flex justify-content-between align-items-center'>
        <h3>Exchange</h3>
        <div className='d-flex gap-3'>
          <span>$: {formatCurrency("USD")} TL</span>
          <span>€: {formatCurrency("EUR")} TL</span>
        </div>
      </nav>
    </header>
  )
}

export default TopBar