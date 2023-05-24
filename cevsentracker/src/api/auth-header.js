import { encryptedLocalStorage } from "./";

export const authHeader = () => {
    const token = encryptedLocalStorage.getItem('token');

    let header = {};
    if (token) {
        header = { Authorization: `Bearer ${token}` };
    }
    return header;
};