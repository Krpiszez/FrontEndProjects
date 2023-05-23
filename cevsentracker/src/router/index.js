import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AboutPage, HabitsPage, AdminDashboardPage, AdminUsersPage, HomePage, LoginPage, RegisterPage, UserHabitTrackDetailsPage, UserHabitTrackPage, UserProfilePage } from '../pages'
import { config } from '../config'
import { VisitorLayout } from '../layouts'

const AppRouter = () => {
    const { routes: { about, admin: { admin, habits, dashboard, users }, home, login, register, user: {userRoute, profile, habitTrack } } } = config;

    return (
        <Router>
            <Routes>
                <Route path={home}>
                    <Route element={<VisitorLayout/>}>
                        <Route index element={<HomePage />} />
                        <Route path={about} element={<AboutPage />} />                   

                        <Route path={userRoute}>
                            <Route index element={<UserProfilePage />} />
                            <Route path={profile} element={<UserProfilePage />} />
                            <Route path={habitTrack}>
                                <Route index element={<UserHabitTrackPage />} />
                                <Route path=":habitId" element={<UserHabitTrackDetailsPage />} />
                            </Route>
                        </Route>
                    </Route>

                    <Route path={login} element={<LoginPage />} />
                    <Route path={register} element={<RegisterPage />} /> 

                    <Route path={admin}>
                        <Route index element={<AdminDashboardPage />} />
                        <Route path={dashboard} element={<AdminDashboardPage />} />
                        <Route path={users} element={<AdminUsersPage />} />
                        <Route path={habits} element={<HabitsPage />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter