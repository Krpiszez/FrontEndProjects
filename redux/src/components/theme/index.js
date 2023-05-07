import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { toggleTheme } from '../../store/theme/slice';

const Theme = () => {

  const {theme} = useSelector(state => state.theme);
  const dispatch = useDispatch();
  const currentTheme = theme === "light" ? "dark" : "light"

  return (
    <Button 
    className='text-capitalize' 
    variant={`outline-${currentTheme}`}
    onClick={()=>dispatch(toggleTheme())}
    >
      {currentTheme}
    </Button>
  )
}

export default Theme