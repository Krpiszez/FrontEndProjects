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
        about: {
            title: 'About Us',
            description:
            'HabitTracker is a powerful application designed to help you track your daily habits and achieve your goals. Whether you want to establish a new habit or break an old one, our platform provides the tools and insights you need for success. With HabitTracker, you can stay motivated, monitor your progress, and celebrate your achievements. Start your journey towards a better you with HabitTracker!',
            bestOffers: {
                title: "Best Offers",
                offers: [
                    {
                        title: 'Track Your Habits',
                        desc: 'Effortlessly monitor your daily habits and keep a record of your progress.',
                        direction: '',
                    },
                    {
                        title: 'Set Goals',
                        desc: 'Define your goals and track your progress towards achieving them.',
                        direction: '',
                    },
                    {
                        title: 'Keep up',
                        desc: 'Receive reminders and notifications to stay motivated and focused on your habits.',
                        direction: '',
                    },
                    {
                        title: 'Insights and Statistics',
                        desc: 'Gain valuable insights and statistics to understand your habits better.',
                        direction: 'right',
                    },
                    {
                        title: 'Customize Your Habits',
                        desc: 'Create and customize your own habits to match your unique lifestyle and preferences.',
                        direction: 'right',
                    },
                    {
                        title: 'Share Your Progress',
                        desc: 'Share your achievements and progress with friends and the HabitTracker community.',
                        direction: 'right',
                    },
                ],
            },
                  
            whoWeAre: {
                title: "Who We Are",
                desc: "HabitTracker is a premier habit tracking service designed to help individuals establish and maintain positive habits. With a focus on personal development and self-improvement, we strive to provide an exceptional and personalized experience for all our users. Our vision is rooted in innovation, user satisfaction, and service excellence. Over the years, we have continuously improved and expanded our services to meet the evolving needs of our users. Our dedicated team ensures the smooth functioning of our platform, offering seamless habit tracking and progress monitoring. We are committed to providing a hassle-free and effective habit tracking experience. Our mission is to empower individuals in their journey towards personal growth and well-being. By leveraging advanced technology and user-friendly interfaces, we make habit tracking simple, engaging, and rewarding. Join us and unlock your potential to create lasting positive habits.",
                services: [
                    {
                        title: "Customizable Habit Tracking",
                        desc: "Track and monitor your habits with our flexible and customizable habit tracking system, tailored to fit your unique goals and preferences."
                    },
                    {
                        title: "Progress Visualization",
                        desc: "Visualize your habit progress through intuitive charts and graphs, providing insights and motivation to stay on track."
                    },
                    {
                        title: "Reminders and Notifications",
                        desc: "Receive timely reminders and notifications to help you stay accountable and consistent in practicing your habits."
                    },
                ]
            },
            whatWeDo: {
                title: "What We Do",
                desc: "At Habit Tracker, we are dedicated to helping individuals build and maintain positive habits that contribute to their personal growth and well-being. We understand that everyone's habit goals are unique, and that's why we offer a customizable habit tracking platform. Our platform empowers you to define and track your habits based on your specific needs and aspirations. With our intuitive interface, you can easily monitor your progress, celebrate milestones, and identify areas for improvement. We believe that habit tracking should be enjoyable and motivating, which is why we provide visualizations that allow you to see your progress at a glance. Stay motivated with insights into your habit streaks, completion rates, and overall performance. To support your habit journey, we offer reminders and notifications to keep you on track and ensure consistency. We are committed to providing a user-friendly and rewarding experience that helps you transform your habits and achieve your goals. Start your habit tracking journey with [Your Company Name] and embrace positive change today.",
                services: ["Customizable Habit Tracking", "Progress Visualization", "Reminders and Notifications", "Personalized Insights"]
            },
        },
        contact: {
            title: "Contact Us",
            desc: "At Habit Tracker, your questions and feedback matter to us. Whether you need help with reservations, have a question about our services, or simply want to share your experience, we are here for you. Feel free to drop us an email or call our customer service line for prompt assistance. Alternatively, you can also use the live chat feature on our website for real-time support. We look forward to hearing from you and ensuring your car rental needs are met with utmost satisfaction.",
            mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d10167.550174568947!2d-73.99430236638482!3d40.743749522813346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1snew%20york%20tech!5e0!3m2!1sen!2str!4v1683791084424!5m2!1sen!2str",
        },
    
        habitDetails: {
            title: "Habit Details",
        },
        habits: {
            title: "Your Habits",
        },
        userProfile: {
            title: "Profile",
        },
        userHabitTrack: {
            title: "Track Habit",
        },
        userHabitTrackDetails: {
            title: "Habit Track Details",
        },
        adminPanel: {
            title: "Admin Panel",
            listItems: {
                dashboard: "Dashboard",
                panelUsers: "Users",
                habits: "Habits",
                habitTracks: "Habit Tracks",
                panelContactMessages: "Contact Messages",
                website: "Website",
                panelLogout: "Logout",
            },
        },
        adminUserPage: {
            title: "Users",
        },
        adminUserDetails: {
            title: "User Details",
            roles: [
                {
                id: 1,
                name: "Customer",
                value: "Customer",
                },
                {
                id: 2,
                name: "Administrator",
                value: "Administrator",
                },
            ],
        },
        adminHabitPage: {
            title: "Habits",
        },
        adminHabitDetails: {
            title: "Habit Details",
        },
        adminHabitTrackPage: {
            title: "Habit Tracks",
        },
        adminHabitTrackDetails: {
            title: "Habit Track Details",
            status: [
                {
                id: 1,
                name: "Completed",
                value: "Completed",
                },
                {
                id: 2,
                name: "Missed",
                value: "Missed",
                },
            ],
        },
        slider: [
            {
                id: 1,
                image: "slider1.jpg",
                title: "Create and Track Your Habits",
                desc: "Stay organized and achieve your goals with our Habit Tracker application"
            },
            {
                id: 2,
                image: "slider3.jpg",
                title: "Build Lasting Habits",
                desc: "Track your progress and develop healthy routines with our Habit Tracker"
            },
            {
                id: 3,
                image: "slider4.jpg",
                title: "Achieve Your Dream By inch a Day",
                desc: "The biggest dreams you have will be accomplished step by step"
            },
            
        ],
        mapUrl: "https://goo.gl/maps/aekRiJbXVYuqVMxp7",
        footerText: "Start tracking your habits today and see the positive changes in your life. Choose from a variety of habit categories and get personalized insights.",
        errors: {
            notFound: {
                code: "404",
                title: "Oops! Page Not Found",
                desc: "The page you are looking for does not exist."
            },
            forbidden: {
                code: "403",
                title: "Oops! Forbidden Access",
                desc: "You are not authorized to access this page."
            }
        }
    },
    API_URL: 'http://localhost:8080',
    endpoints: {
        auth: {
            login: "/login",
            register: "/register",
        },
        habits: {
            get: "/habit",
            create: "/habits/create",
            track: "/track",
        },
        files: {
            get: "/files",
            upload: "/files/upload",
            deleteFile: "/files/delete",
            download: "/files/download",
            display: "/files/display",
        },
        userPath: "/user",
    },
    routes: {
        about: 'about',
        admin: {
            admin: "admin",
            dashboard: 'dashboard',
            adminUsers: 'users',
            adminHabits: 'habits',
        },
        contact: 'contact',
        home: '/',
        login: 'login',
        privacyPolicy: 'privacy-policy',
        register: 'register',
        user: {
            userRoute: "user",
            userHabits: 'habits',
            userHabitTrack: 'habit-track',
        },
        errors: {
            notFoundRoute: '*',
            forbiddenRoute: 'forbidden',
        },
        habit: 'habit',
        habitTrack: 'habit-track',
    },
}     