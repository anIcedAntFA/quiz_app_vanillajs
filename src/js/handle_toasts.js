import toast from './library/toasts.js';
//***************************************

const showErrorToastName = () => {
  toast({
    title: 'Error!!',
    message: `
      You haven't saved your nickname, press the 
      <span style="font-family: 'cubano', sans-serif; font-size: var(--font-size-body); color: var(--green)">save button</span> 
      and done it.
    `,
    type: 'error',
  });
};

const showSuccessToastName = () => {
  toast({
    title: 'Successfully!!',
    message: `Welcome to the Quiz, ${playerName}.`,
    type: 'success',
  });
};

const showSuccessToastNameAgain = () => {
  toast({
    title: 'Successfully!!',
    message: `Welcome back to the game, ${playerName}.`,
    type: 'success',
  });
};

const showErrorToastSettings = () => {
  toast({
    title: 'Error!!',
    message: `
      You haven't customized the game settings, press the 
      <span style="font-family: 'cubano', sans-serif; font-size: var(--font-size-body); color: var(--pink)">save button</span> 
      and done it
    `,
    type: 'error',
  });
};

const showSuccessToastSettings = () => {
  toast({
    title: 'Successfully!!',
    message: 'You have successfully saved your settings.',
    type: 'success',
  });
};

const showSuccessToastDefaultSettings = () => {
  toast({
    title: 'Successfully!!',
    message: 'You have agreed with the default game mode.',
    type: 'success',
  });
};

const showErrorToastRules = () => {
  toast({
    title: 'Error!!',
    message: 'You must submit your choice first.',
    type: 'error',
  });
};

const showSuccessToastRules = () => {
  toast({
    title: 'Successfully!!',
    message: 'You have agreed with the rules.',
    type: 'success',
  });
};

const showSuccessToastSavedResult = () => {
  toast({
    title: 'Successfully!!',
    message: 'You have saved your result.',
    type: 'success',
  });
};

export {
  showErrorToastName,
  showSuccessToastName,
  showSuccessToastNameAgain,
  showErrorToastSettings,
  showSuccessToastSettings,
  showSuccessToastDefaultSettings,
  showErrorToastRules,
  showSuccessToastRules,
  showSuccessToastSavedResult,
};
