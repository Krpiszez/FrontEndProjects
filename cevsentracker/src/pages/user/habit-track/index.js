import React from 'react';
import { PageHeader, Spacer, GeneralTrackHabits } from '../../../components';
import { config } from '../../../config';

const { projectDetails: { habits: { title } } } = config;

const UserHabitTrackPage = () => {
    return (
        <>
            <PageHeader title={title} />
            <Spacer />
            <GeneralTrackHabits />
            <Spacer />
        </>
    )
}

export default UserHabitTrackPage;