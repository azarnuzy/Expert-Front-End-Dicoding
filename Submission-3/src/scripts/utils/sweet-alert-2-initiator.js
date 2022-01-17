import Swal from 'sweetalert2';

const initSwalSuccess = (title) => {
  Swal.fire({
    title,
    toast: true,
    icon: 'success',
    showConfirmButton: false,
    timer: 1000,
  });
};

const initSwalError = (title) => {
  Swal.fire({
    title,
    toast: true,
    icon: 'error',
    showConfirmButton: false,
    timer: 1000,
  });
};

export { initSwalSuccess, initSwalError };
