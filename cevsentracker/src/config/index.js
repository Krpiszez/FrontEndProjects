export const config = {
    projectDetails: {
        name: 'Habit Tracker',
        description: "Habit Tracker is a powerful app that helps you build and track your daily habits. Whether you're looking to form new habits or break old ones, Habit Tracker provides the tools and insights you need to stay on track.",
        version: '1.0.0',
        phone: "+1 (555) 123-4567",
        phone2: "+1 (555) 123-6745",
        email: "info@habittracker.com",
        address: "1234 Main St, New York, NY 10001",
        website: "https://habittracker.com",
        socialMedia: {
            twitter: "https://twitter.com",
            facebook: "https://facebook.com",
            instagram: "https://instagram.com",
            linkedin: "https://linkedin.com",
            youtube: "https://youtube.com",
        },
        aboutUs: "With Habit Tracker, you can easily create custom habits, set goals, and track your progress over time. The intuitive interface allows you to log your habits effortlessly and view detailed statistics and visualizations to monitor your performance. Stay motivated with personalized reminders and notifications, and celebrate your achievements with rewards and milestones. Habit Tracker empowers you to take control of your habits and make positive changes in your life. Download Habit Tracker now and start building the habits that lead to a happier, healthier, and more productive you.",
    },
    API_URL: 'https://carrental-v3-backend.herokuapp.com',
    footerText: "Check out our new fleet of cars, latest offers, our advantages and free extras online. Choose from one of our new car models.",
    endpoints: {
        auth: {
            login: "/login",
            register: "/register",
        },
        cars: {
            visitors: '/habit/visitors',
            admin: '/habit/admin',
        },
        files: {
            get: '/files',
            upload: '/files/upload',
            delete: '/files',
            download: '/files/download',
            display: "/files/display"
        },
        reports: {
            users: "/excel/download/users",
            reservations: "/excel/download/reservations",
            cars: "/excel/download/cars",
        },
        reservations: "/reservation",
        user: "/user"
    },
    routes: {
        about: 'about',
        admin: {
            admin: "admin",
            habits: 'habits',
            dashboard: 'dashboard',
            users: 'users',
        },
        home: '/',
        login: 'login',
        register: 'register',
        user: {
            userRoute: "user",
            profile: 'profile',
            habitTrack: 'habitTrack',
        },
        habits: 'habits',
    },
}