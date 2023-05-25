import React from 'react'
import { config } from '../../../../config'
import { Col, Container, Row } from 'react-bootstrap';
import { ImgWhatWeDo } from '../../../../assets/image';
import { TouchApp, BookOnline, PendingActions, Task, Construction, CleaningServices } from "@mui/icons-material";
import "./style.scss";

const WhatWeDo = () => {
    const { projectDetails: { about: { whatWeDo: { title, desc, services } } } } = config;
    return (
        <Container fluid className='what-we-do'>
            <Row>
                <Col md={4}>
                    <img
                        src={ImgWhatWeDo}
                        alt={title}
                        title={title}
                    />
                </Col>
                <Col md={8}>
                    <div>
                        <h2 className='mt-5'>{title}</h2>
                        <p>
                            {desc}
                        </p>
                    </div>
                    <Row className='props mb-5'>
                        <Col sm={6} xl={4}>
                            <TouchApp /> <span>{services[0]}</span>
                        </Col>
                        <Col sm={6} xl={4}>
                            <BookOnline /> <span>{services[1]}</span>
                        </Col>
                        <Col sm={6} xl={4}>
                            <PendingActions /> <span>{services[2]}</span>
                        </Col>
                        <Col sm={6} xl={4}>
                            <Task /> <span>{services[3]}</span>
                        </Col>
                        <Col sm={6} xl={4}>
                            <Construction /> <span>{services[4]}</span>
                        </Col>
                        <Col sm={6} xl={4}>
                            <CleaningServices /> <span>{services[5]}</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default WhatWeDo