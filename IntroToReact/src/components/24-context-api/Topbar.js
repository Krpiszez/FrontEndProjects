import React, { useContext } from 'react'
import './topbar.scss'
import StoreContext from '../../store'

const Topbar = () => {
    const store = useContext(StoreContext)
    const {currencies} = store;

    const formatCurrency = (val) =>{
        return (1 / currencies.rates[val]).toFixed(2);
    }


  return (
    <header className='exchange'>
        <nav>
            <h3>Exchange</h3>
            <div>
                <span>$: {formatCurrency("USD")}</span>
                <span>€: {formatCurrency("EUR")}</span>
            </div>
        </nav>
    </header>
  )
}

export default Topbar