import React from 'react';
import { PageHeader, Spacer, UserTrackHabits } from '../../../components';
import { config } from '../../../config';

const { projectDetails: { habits: { title } } } = config;

const UserHabitTrackPage = () => {
    return (
        <>
            <PageHeader title={title} />
            <Spacer />
            <UserTrackHabits />
            <Spacer />
        </>
    )
}

export default UserHabitTrackPage;