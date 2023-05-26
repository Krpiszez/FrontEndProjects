import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutPage, HomePage, LoginPage, PrivacyPolicyPage, RegisterPage, UserProfilePage, UserHabitTrackPage, UserHabitTrackDetailsPage, ErrorPage, AdminDashboardPage, AdminUsersPage, AdminUserDetailsPage, AdminHabitsPage, AdminHabitDetailsPage, AdminHabitTracksPage, AdminHabitTrackDetailsPage, UserHabitsPage } from '../pages';
import { config } from '../config';
import { AuthLayout, VisitorLayout, UserLayout, AdminLayout } from '../layouts';
import { Habits } from '../components';

const AppRouter = () => {
  const {
    routes: {
      about,
      home,
      login,
      privacyPolicy,
      register,
      habit,
      user: { userRoute, userHabitTrack, userHabits },
      admin: { admin, dashboard, adminUsers, adminHabits, adminHabitTracks },
      errors: { notFoundRoute, forbiddenRoute }
    },
    projectDetails:{
        errors : {notFound, forbidden}
    }
  } = config;

  return (
    <Router>
      <Routes>
        <Route path={home}>
          <Route element={<VisitorLayout />}>
            <Route index element={<HomePage />} />
            <Route path={about} element={<AboutPage />} />
            <Route path={privacyPolicy} element={<PrivacyPolicyPage />} />
            <Route path={habit} element={<Habits />} />

            <Route element={<UserLayout />}>
              <Route path={userRoute}>
                <Route index element={<UserProfilePage />} />
                <Route path={userHabits} element={<UserHabitsPage/>} />
                <Route path={userHabitTrack}>
                    <Route index element={<UserHabitTrackPage />} />
                    <Route path={`:habitTrackId`} element={<UserHabitTrackDetailsPage />} />
                </Route>                
              </Route>
            </Route>

            <Route path={notFoundRoute} element={<ErrorPage {...notFound} />} />
            <Route path={forbiddenRoute} element={<ErrorPage {...forbidden} />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path={login} element={<LoginPage />} />
            <Route path={register} element={<RegisterPage />} />
          </Route>

          <Route element={<AdminLayout />}>
            <Route path={admin}>
              <Route index element={<AdminDashboardPage />} />
              <Route path={dashboard} element={<AdminDashboardPage />} />
              <Route path={adminUsers}>
                <Route index element={<AdminUsersPage />} />
                <Route path={`:userId`} element={<AdminUserDetailsPage />} />
              </Route>
              <Route path={adminHabits}>
                <Route index element={<AdminHabitsPage />} />
                <Route path={`:habitId`} element={<AdminHabitDetailsPage />} />
              </Route>
              <Route path={adminHabitTracks}>
                <Route index element={<AdminHabitTracksPage />} />
                <Route path={`:habitTrackId`} element={<AdminHabitTrackDetailsPage />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
