import React from 'react'
import { Container } from 'react-bootstrap'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import {theme} from './theme'
import { ThemeProvider } from '@mui/material';

const MaterialIcons = () => {
  return (
    <Container>MaterialIcons:
        <ThemeProvider theme={theme}>
        <FacebookIcon fontSize='large' color='primary'/>
        <TwitterIcon fontSize='small' color='warning'/>
        <InstagramIcon fontSize='large' color='customColor'/>
        </ThemeProvider>
    </Container>

  )
}

export default MaterialIcons