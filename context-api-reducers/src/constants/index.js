export const settings = {
    api: {
        baseUrl: "https://644ea9dd1b4567f4d58d5860.mockapi.io"
    },
    routes: {
        home: "/",
        login: "/login",
    },

    endpoints: {
        users: "/users",
    },

    types: {
        LOGIN_SUCCESS: "LOGIN_SUCCESS",
        LOGIN_FAILURE: "LOGIN_FAILURE",
        LOGOUT: "LOGOUT",

        COUNTER_INCREMENT: "COUNTER_INCREMENT",
        COUNTER_DECREMENT: "COUNTER_DECREMENT",
        COUNTER_RESET: "COUNTER_RESET",
    }
}