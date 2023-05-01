import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Libraries from './components/Libraries'
import Try from './components/Try'
import Features from './components/Features'

const App = () => {
  return (
    <div className='app'>
        <Header/>
        <br/>
        <Home/>
        <br/>
        <Libraries/>
        <Features/>
        {/* <Try/> */}
    </div>
  )
}

export default App