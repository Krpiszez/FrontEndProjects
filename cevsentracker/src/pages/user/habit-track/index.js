import React from 'react';
import { PageHeader, Spacer, YesterdayTrack, TrialTrack } from '../../../components';
import { config } from '../../../config';

const { projectDetails: { habits: { title } } } = config;

const UserHabitTrackPage = () => {
    return (
        <>
            <PageHeader title={title} />
            <Spacer />
            <YesterdayTrack/>
            {/* <GeneralTrackHabits /> */}
            <Spacer />
            <TrialTrack/>
        </>
    )
}

export default UserHabitTrackPage;