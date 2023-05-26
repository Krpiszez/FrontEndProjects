import React from 'react'
import { config } from '../../../../config';
import { OfferItem, SectionHeader } from "../../../";
import { Col, Container, Row } from 'react-bootstrap';
import { Assessment, AutoStories, DirectionsRun, Equalizer, Insights, MonitorHeart,  } from "@mui/icons-material";
import { ImgBestOffer } from '../../../../assets/image';
import './style.scss';

const BestOffers = () => {
    const { projectDetails: { about: { bestOffers: { offers, title } } } } = config;

    return (
        <div className='best-offers'>
            <SectionHeader title1="Stay" title2="Motivated" />
            <div className='offers'>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <OfferItem {...offers[0]} icon={<Equalizer />} />
                            <OfferItem {...offers[1]} icon={<Insights />} />
                            <OfferItem {...offers[2]} icon={<MonitorHeart />} />
                        </Col>
                        <Col lg={4}>
                            <img
                                src={ImgBestOffer}
                                alt={title}
                                title={title}
                                className='img-fluid'
                            />
                        </Col>
                        <Col lg={4}>
                            <OfferItem {...offers[3]} icon={<Assessment />} />
                            <OfferItem {...offers[4]} icon={<AutoStories />} />
                            <OfferItem {...offers[5]} icon={<DirectionsRun />} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default BestOffers