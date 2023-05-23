import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutPage, ContactPage, HomePage, LoginPage, PrivacyPolicyPage, RegisterPage, UserProfilePage, UserHabitTrackPage, UserHabitTrackDetailsPage, ErrorPage, AdminDashboardPage, AdminUsersPage, AdminUserDetailsPage, AdminHabitsPage, AdminHabitDetailsPage, AdminHabitTracksPage, AdminHabitTrackDetailsPage } from '../pages';
import { config } from '../config';
import { AuthLayout, VisitorLayout, UserLayout, AdminLayout } from '../layouts';

const AppRouter = () => {
  const {
    routes: {
      about,
      contact,
      home,
      login,
      privacyPolicy,
      register,
      user: { userRoute, userHabitTrack },
      admin: { admin, dashboard, adminUsers, adminUserDetails, adminHabits, adminHabitDetails, adminHabitTracks, adminHabitTrackDetails },
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
            <Route path={contact} element={<ContactPage />} />
            <Route path={privacyPolicy} element={<PrivacyPolicyPage />} />

            <Route element={<UserLayout />}>
              <Route path={userRoute}>
                <Route index element={<UserProfilePage />} />
                <Route path={userHabitTrack}>
                    <Route index element={<UserHabitTrackPage />} />
                    <Route path={`:habitTrackId`} element={<UserHabitTrackDetailsPage />} />
                </Route>                
              </Route>
            </Route>

            <Route path={notFoundRoute} element={<ErrorPage title="Oops! Page Not Found" desc="The page you are looking for does not exist." />} />
            <Route path={forbiddenRoute} element={<ErrorPage title="Oops! Forbidden Access" desc="You are not authorized to access this page." />} />
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
