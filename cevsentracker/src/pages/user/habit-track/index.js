import React from 'react';
import { PageHeader, Spacer, GeneralTrackHabits } from '../../../components';
import { config } from '../../../config';
import TrialTrack from '../../../components/user/trial-track';

const { projectDetails: { habits: { title } } } = config;

const UserHabitTrackPage = () => {
    return (
        <>
            <PageHeader title={title} />
            <Spacer />
            <GeneralTrackHabits />
            <Spacer />
            <TrialTrack/>
        </>
    )
}

export default UserHabitTrackPage;