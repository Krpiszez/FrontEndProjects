import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from "react-redux";

const Content = () => {

  const {language} = useSelector(state=>state.localization)
  
  const {trivialInfo : {welcome, aboutUs, contact}} = require(`../../utils/languages/${language}.json`);

  

  return (
    <Container className='text-center'>
      <h1>{welcome}</h1>
      <h2>{aboutUs}</h2>
      <h3>{contact}</h3>
    </Container>
  )
}

export default Content