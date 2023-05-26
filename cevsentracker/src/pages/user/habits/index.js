import React from 'react';
import { PageHeader, Spacer, UserHabits } from '../../../components';
import { config } from '../../../config';

const { projectDetails: { habits: { title } } } = config;

const UserHabitsPage = () => {
    return (
        <>
            <PageHeader title={title} />
            <Spacer />
            <UserHabits />
            <Spacer />
        </>
    )
}

export default UserHabitsPage;