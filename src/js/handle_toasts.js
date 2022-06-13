import toast from './lib/toasts.js';

const showErrorToastInput = (message) => {
  toast({
    title: 'Error!!',
    message,
    type: 'error',
  });
};

const showWarningToastInput = (message) => {
  toast({
    title: 'Warning!!',
    message,
    type: 'warning',
  });
};

export { showWarningToastInput, showErrorToastInput };
