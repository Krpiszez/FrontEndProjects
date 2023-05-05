import React, { useEffect, useState } from 'react'
import AppRouter from './router'
import StoreContext from './store'
import axios from 'axios'
import { settings } from './constants'

const App = () => {

  const [currencies, setCurrencies] = useState({});

  const loadData = async () => {
    try {
      const response = await axios.get(`${settings.baseUrl}/latest?from=TRY`);
      setCurrencies(response.data.rates);
    } catch (err) {
      console.log(err)
    }
  }

  console.log(currencies)

  useEffect(()=>{
    loadData();
  }, [])

  return (
    <StoreContext.Provider value={{currencies}}>
      <AppRouter/>
    </StoreContext.Provider>
      
  )
}

export default App