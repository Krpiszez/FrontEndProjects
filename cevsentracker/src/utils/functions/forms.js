export const validCheck = (field, obj) => ({
    isInvalid: obj.touched[field] && obj.errors[field],
    isValid: obj.touched[field] && !obj.errors[field],
});