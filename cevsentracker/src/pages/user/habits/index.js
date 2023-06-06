import React from 'react';
import { PageHeader, Spacer, UserHabits, PopularHabits, AddHabit, YesterdayUserHabits } from '../../../components';
import { config } from '../../../config';

const { projectDetails: { habits: { title } } } = config;

const UserHabitsPage = () => {
    return (
        <>
            <PageHeader title={title} />
            <AddHabit />
            <Spacer />
            <YesterdayUserHabits/>
            <Spacer />
            <UserHabits />
            <Spacer />
            <PopularHabits />
        </>
    )
}

export default UserHabitsPage;