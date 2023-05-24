import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { config } from '../../../config';
import { Logo } from '../../../assets/image';
import { Home, Info, CheckBox } from "@mui/icons-material";
import "./style.scss";
import { ContactInfo } from '../../';

const Footer = () => {
    const { routes: { home, about, user:{userRoute, userHabitTrack} }, projectDetails: { name, footerText } } = config;
    const { pathname } = useLocation();

    return (
        <footer>
            <Container>
                <Row className='text-primary g-5'>
                    <Col lg={6} xl={3} className='p-1'>
                        <Link to={home}>
                            <img
                                src={Logo}
                                alt={name}
                                title={name}
                                className='img-fluid'
                            />
                        </Link>
                        <p>
                            {footerText}
                        </p>
                    </Col>
                    <Col lg={6} xl={3} className='p-1'>
                        <h2>Quick Links</h2>
                        <ul>
                            <li>
                                <Link to={home} className={pathname === home ? "active" : ""}>
                                    <Home /> Home
                                </Link>
                            </li>
                            <li>
                                <Link as={Link} to={`${userRoute}/${userHabitTrack}`} className={pathname === `/${userRoute}/${userHabitTrack}` ? "active" : ""}>
                                    <CheckBox /> Track Habits
                                </Link>
                            </li>
                            <li>
                                <Link to={about} className={pathname === `/${about}` ? "active" : ""}>
                                    <Info /> About Us
                                </Link>
                            </li>                          
                        </ul>
                    </Col>
                    <Col lg={6} xl={3} className='p-1'>
                        <h2>Working Hours</h2>
                        <ul>
                            <li>Mon-Fri: 09:00 AM — 09:00 PM</li>
                            <li>Saturday: 09:00 AM — 07:00 PM</li>
                            <li>Sunday: 09:00 AM — 05:00 PM</li>
                        </ul>
                    </Col>
                    <Col lg={6} xl={3} className='p-1'>
                        <h2>Contact Us</h2>
                        <ContactInfo />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer