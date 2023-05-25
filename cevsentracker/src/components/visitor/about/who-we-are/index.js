import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { ImgWhoWeAre } from "../../../../assets/image";
import { config } from '../../../../config';
import { WhoWeAreServices } from "../../../"
import "./style.scss";
import { AddReaction, List, Payments } from '@mui/icons-material';

const WhoWeAre = () => {
    const { projectDetails: { about: { whoWeAre: { title, desc, services } } } } = config;

    return (
        <Container className='who-we-are'>
            <Row>
                <Col lg={4}>
                    <img
                        src={ImgWhoWeAre}
                        alt={title}
                        title={title}
                    />
                </Col>
                <Col lg={8} className='who-we-are-content'>
                    <div className='who-we-are-info'>
                        <h2>{title}</h2>
                        <p>{desc}</p>
                    </div>
                    <Row>
                        <WhoWeAreServices services={services[0]} icon={<List />} />
                        <WhoWeAreServices services={services[1]} icon={<Payments />} />
                        <WhoWeAreServices services={services[2]} icon={<AddReaction />} />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default WhoWeAre