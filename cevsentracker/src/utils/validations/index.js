import * as Yup from 'yup';
import { checkExpireDate } from "../";

export const loginFormValidationSchema = Yup.object({
    userName: Yup.string()
      .required("Please enter your username"),
    password: Yup.string()
      .required("Please enter your password")
  });

export const registerFormValidationSchema = Yup.object({
    userName: Yup.string()
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name must be at most 50 characters")
        .required("Please enter your user name"),
    // lastName: Yup.string()
    //     .min(2, "Last name must be at least 2 characters")
    //     .max(50, "Last name must be at most 50 characters")
    //     .required("Please enter your last name"),
    // email: Yup.string()
    //     .email("Invalid email address")
    //     .required("Please enter your email address"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .max(50, "Password must be at most 50 characters")
        .matches(/[a-z]+/, "Password must contain at least one lowercase letter")
        .matches(/[A-Z]+/, "Password must contain at least one uppercase letter")
        .matches(/\d+/, "Password must contain at least one number")
        .matches(/[@$!%*#?&.]+/, "Password must contain at least one special character")
        .required("Please enter your password"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords fields doesn't match")
        .required("Please confirm your password"),
    // phoneNumber: Yup.string()
    //     .matches(/^[0-9]+$/, "Phone number must contain only digits")
    //     .min(10, "Phone number must be at least 10 digits")
    //     .max(10, "Phone number must be at most 10 digits")
    //     .required("Please enter your phone number"),
    // address: Yup.string()
    //     .min(5, "Address must be at least 5 characters")
    //     .max(50, "Address must be at most 50 characters")
    //     .required("Please enter your address"),
    // zipCode: Yup.string()
    //     .matches(/^[0-9]+$/, "Zip code must contain only digits")
    //     .min(4, "Zip code must be at least 4 digits")
    //     .max(6, "Zip code must be at most 6 digits")
    //     .required("Please enter your zip code"),
});

// CONTACT FORM
export const contactFormValidationSchema = Yup.object({
    name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must be at most 50 characters")
        .required("Please enter your name"),
    subject: Yup.string()
        .min(5, "Subject must be at least 5 characters")
        .max(50, "Subject must be at most 50 characters")
        .required("Please enter your subject"),
    body: Yup.string()
        .min(20, "Body must be at least 20 characters")
        .max(200, "Body must be at most 200 characters")
        .required("Please enter your body"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email address"),
});

// BOOKING FORM
export const bookingFormValidationSchema = Yup.object({
    pickUpLocation: Yup.string().required("Please enter your pick up location"),
    dropOffLocation: Yup.string().required("Please enter your drop off location"),
    pickUpDate: Yup.date().required("Please enter your pick up date"),
    pickUpTime: Yup.string().required("Please enter your pick up time"),
    dropOffDate: Yup.date().required("Please enter your drop off date"),
    dropOffTime: Yup.string().required("Please enter your drop off time"),
    cardNo: Yup.string()
        .min(15, "Card number must be at least 15 digits")
        .required("Please enter card number"),
    cardHolderName: Yup.string().required("Please enter card holder name"),
    expiryDate: Yup.date()
        .test("month_check", "Invalid expiry date (MM/YY)", (val) => checkExpireDate(val))
        .required("Please enter expiry date"),
    cvv: Yup.number()
        .typeError("CVV must be a number")
        .min(1)
        .max(999)
        .required("Please enter CVV"),
    terms: Yup.bool().oneOf([true], "Please accept terms and conditions")
});

/////////////// USER VALIDATIONS ///////////////

// PROFILE FORM
export const userProfileFormValidationSchema = Yup.object({
    firstName: Yup.string()
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name must be at most 50 characters")
        .required("Please enter your first name"),
    lastName: Yup.string()
        .min(2, "Last name must be at least 2 characters")
        .max(50, "Last name must be at most 50 characters")
        .required("Please enter your last name"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email address"),
    phoneNumber: Yup.string()
        .required("Please enter your phone number"),
    address: Yup.string()
        .min(5, "Address must be at least 5 characters")
        .max(50, "Address must be at most 50 characters")
        .required("Please enter your address"),
    zipCode: Yup.string()
        .matches(/^[0-9]+$/, "Zip code must contain only digits")
        .min(4, "Zip code must be at least 4 digits")
        .max(6, "Zip code must be at most 6 digits")
        .required("Please enter your zip code"),
});

// PASSWORD FORM
export const userPasswordFormValidationSchema = Yup.object({
    currentPassword: Yup.string()
        .required("Please enter your current password"),
    newPassword: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(/[a-z]+/, "Password must contain at least one lowercase letter")
        .matches(/[A-Z]+/, "Password must contain at least one uppercase letter")
        .matches(/\d+/, "Password must contain at least one number")
        .matches(/[@$!%*#?&.]+/, "Password must contain at least one special character")
        .required("Please enter your new password"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Passwords fields doesn't match")
        .required("Please confirm your new password"),
});


/////////////// ADMIN VALIDATIONS ///////////////

export const adminUserDetailsFormValidationSchema = Yup.object({
    firstName: Yup.string()
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name must be at most 50 characters")
        .required("Please enter your first name"),
    lastName: Yup.string()
        .min(2, "Last name must be at least 2 characters")
        .max(50, "Last name must be at most 50 characters")
        .required("Please enter your last name"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email address"),
    phoneNumber: Yup.string()
        .matches(/\d+/, "Phone number must contain only digits")
        .required("Please enter your phone number"),
    address: Yup.string()
        .min(5, "Address must be at least 5 characters")
        .max(50, "Address must be at most 50 characters")
        .required("Please enter your address"),
    zipCode: Yup.string()
        .matches(/\d+/, "Zip code must contain only digits")
        .min(5, "Zip code must be at least 5 digits")
        .max(5, "Zip code must be at most 5 digits")
        .required("Please enter your zip code"),
    roles: Yup.string()
        .test(
            "role_check",
            "Please select a role",
            (val) => val.length > 0
        )
});

// ADMIN RESERVATIONS FORM
export const adminReservationDetailsFormValidationSchema = Yup.object({
    pickUpLocation: Yup.string().required("Enter the pick up location"),
    dropOffLocation: Yup.string().required("Enter the drop off location"),
    pickUpDate: Yup.string().required("Enter the pick up date"),
    pickUpTime: Yup.string().required("Enter the pick up time"),
    dropOffDate: Yup.string().required("Enter the drop off date"),
    dropOffTime: Yup.string().required("Enter the drop off time"),
    carId: Yup.string().required("Select a car"),
    status: Yup.string().required("Select a status"),
});