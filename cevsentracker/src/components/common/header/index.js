import React from 'react'
import "./style.scss";
import { Container } from 'react-bootstrap';
import { Logo } from "../../../assets/image";
import {Menubar, Topbar} from '../../';
import { config } from '../../../config';

const Header = () => {
  const { projectDetails: { name } } = config;
  return (
      <Container className='p-0 fixed-top'>
          <div className='header'>
              <div className='logo'>
                  <img src={Logo} alt={name} title={name} className='img-fluid' />
              </div>
              <div className='menus'>
                  <Topbar />
                  <Menubar />
              </div>
          </div>
      </Container>
  )
}

export default Header