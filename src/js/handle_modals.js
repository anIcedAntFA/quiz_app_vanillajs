import modal from './lib/modals.js';

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

const renderWarningSettings = () => {
  modal({
    title: 'Warning',
    message: `
      Game settings are set to default, are you sure you don't want to change it. If you want, \
      press the <span style="font-family: 'cubano', sans-serif; font-size: var(--font-size-body); color: var(--pink)">settings button</span> \
      to enter the game settings and choose the game modes you want to experience.
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

export { renderAppInformation, handleAppLanguage, renderWarningSettings, renderThankYouMessage };
