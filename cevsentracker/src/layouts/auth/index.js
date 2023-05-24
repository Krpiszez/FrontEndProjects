import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";
import { config } from '../../config';
import { Logo } from '../../assets/image';
import { HomeOutlined, CancelOutlined } from "@mui/icons-material";
import "./style.scss";

const AuthLayout = () => {
    const { projectDetails: { name }, routes: { home } } = config;
    const navigate = useNavigate();

    return (
        <Container fluid className='auth-layout'>
            <Row>
                <Col lg={6} className='banner'>
                    <img src={Logo} alt={name} title={name} />
                    <div className='toolbar'>
                        <CancelOutlined
                            onClick={() => navigate(-1)}
                        />
                        <HomeOutlined
                            onClick={() => navigate(home)}
                        />
                    </div>
                </Col>
                <Col lg={6} className='forms'>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    )
}

export default AuthLayout;