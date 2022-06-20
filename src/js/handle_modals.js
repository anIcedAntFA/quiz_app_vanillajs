import modal from './lib/modals.js';
import { showSuccessToastNameAgain, showSuccessToastDefaultSettings } from './handle_toasts.js';

const renderAppInformation = () => {
  modal({
    title: 'Information',
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
    type: 'info',
  });
};

const handleAppLanguage = () => {
  modal({
    title: 'Error',
    message:
      'Sorry for the inconvenience 🥲. \
      <br/> This feature is under construction 🪛🛠️⚙️. We will finish it as soon as possible. \
      <br/> Thank you so much for playing this game 💓💞.',
    type: 'error',
  });
};

const renderWarningHome = () => {
  modal({
    title: 'Warning',
    message: `
    Keep calm Bro!
    <br>
    This nickname already exists on the Leaderboard 💔. if it is yours, you could press the 
    <span style="font-family: 'cubano', sans-serif; font-size: var(--font-size-body); color: var(--green)">agree button</span> 
    to overwrite and save it.
    <br>
    If not, please turn off this pop-up window, then type an another cool 💓nickname💓.
    <br>
    <br>
    Sorry for the inconvenience 😇.
      `,
    type: 'warning',
    keyBtn: true,
    handleKeyName: function () {
      isSavedPlayerName = true;
      warningDuplicateNameTimerId = setTimeout(() => {
        showSuccessToastNameAgain();
      }, 400);
    },
  });
};

const renderWarningSettings = () => {
  modal({
    title: 'Warning',
    message: `
      Play mode is being <span style="font-family: 'fira-code-bold', sans-serif; color: var(--orange-dark); text-transform: uppercase">default</span>. 
      <br>
      If you wanna change it, turn off this pop-up window, then press the 
      <span style="font-family: 'cubano', sans-serif; font-size: var(--font-size-body); color: var(--pink)">settings button</span> at the homepage and customize the game mode you like.
      <br>
      If you don't wanna change it, press the <span style="font-family: 'cubano', sans-serif; font-size: var(--font-size-body); color: var(--green)">agree button</span> below then 
      press the <span style="font-family: 'cubano', sans-serif; font-size: var(--font-size-body); color: var(--blue)">continue button</span> at the homepage to go forward.
      `,
    type: 'warning',
    keyBtn: true,
    handleKeyName: function () {
      isSavedPlayerSettings = true;
      warningDefaultSettingsTimerId = setTimeout(() => {
        showSuccessToastDefaultSettings();
      }, 400);
    },
  });
};

const renderWarningRules = () => {
  modal({
    title: 'Warning',
    message: `
      Hello Bro!
      <br>
      If you choose <span style="font-family: 'fira-code-bold', sans-serif;">'disagree'</span>, you cannot play the game. 
      <br>
      Turn off this pop-up window, read the rules and select <span style="font-family: 'fira-code-bold', sans-serif;">'agree'</span>, then press the 
      <span style="font-family: 'cubano', sans-serif; font-size: var(--font-size-body); color: var(--blue)">start button</span> to enjoy the game.
      <br>
      <br>
      Sorry for the inconvenience.
    `,
    type: 'warning',
  });
};

const renderThankYouMessage = () => {
  modal({
    title: 'Success',
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
    type: 'success',
  });
};

export {
  renderAppInformation,
  handleAppLanguage,
  renderWarningHome,
  renderWarningSettings,
  renderWarningRules,
  renderThankYouMessage,
};
