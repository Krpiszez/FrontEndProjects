import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Libraries from './components/Libraries'

const App = () => {
  return (
    <div className='app'>
        <Header/>
        <Home/>
        <Libraries/>
    </div>
  )
}

export default App