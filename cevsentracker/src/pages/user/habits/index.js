import React from 'react';
import { PageHeader, Spacer, UserHabits, PopularHabits, AddHabit } from '../../../components';
import { config } from '../../../config';

const { projectDetails: { habits: { title } } } = config;

const UserHabitsPage = () => {
    return (
        <>
            <PageHeader title={title} />
            <AddHabit />
            <Spacer />
            <UserHabits />
            <Spacer />
            <PopularHabits />
        </>
    )
}

export default UserHabitsPage;