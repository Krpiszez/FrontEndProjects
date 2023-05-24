import Swal from "sweetalert2";

export const swalQuestion = (title, text) => {
    return Swal.fire({
        title,
        text,
        icon: 'question',
        showCancelButton: true,
    });
};

export const swalToast = (title, icon = "info", timer = 4000) => {
    // success | warning | question | error | info
    Swal.fire({
        icon,
        title,
        showConfirmButton: false,
        timer,
    });
};