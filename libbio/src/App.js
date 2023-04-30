import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Libraries from './components/Libraries'
import Try from './components/Try'

const App = () => {
  return (
    <div className='app'>
        <Header/>
        <br/>
        <Home/>
        <Libraries/>
        {/* <Try/> */}
    </div>
  )
}

export default App