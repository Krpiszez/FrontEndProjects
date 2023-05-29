import React from 'react'
import { PageHeader, Spacer, UserAvatar, UserPasswordForm, UserTrackHabits } from '../../../components';
import { config } from '../../../config';
import { Col, Container, Row } from 'react-bootstrap';

const { projectDetails: { userProfile: { title } } } = config;

const UserProfilePage = () => {
    return (
        <>
            <PageHeader title={title} />
            <Spacer />
            <Container>
                <Row className='justify-content-center gap-5'>
                    <Col lg={2} className='text-center'>
                        <UserAvatar />
                    </Col>
                    <Col lg={8}>
                        <UserTrackHabits />
                    </Col>
                </Row>    
            <UserPasswordForm />                    
            </Container>
            <Spacer />
        </>
    )
};

export default UserProfilePage;