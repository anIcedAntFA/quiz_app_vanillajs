import modal from './library/modals.js';
import { showSuccessToastNameAgain, showSuccessToastDefaultSettings } from './handle_toasts.js';
//***************************************************************************************************

const renderAppInformation = () => {
  modal({
    title: 'App Information',
    message: `
      <div class="modal__info-app">
        <div class="wrapper">
          <strong>Name:</strong> Javascript Quiz App Version 1.6
        </div>
        <div class="wrapper">
          <strong>Main features:</strong>
          <br>
          <p><i class="fa-solid fa-terminal"></i> Validations.</p> 
          <p><i class="fa-solid fa-terminal"></i> Render questions based on player settings.</p>
          <p><i class="fa-solid fa-terminal"></i> Timer countdown.</p>
          <p><i class="fa-solid fa-terminal"></i> Ranking with multiple players.</p>
        </div>
        <div class="wrapper">
          <strong>Technologies:</strong> 
          <br>
          <p>
            <span class="tag-sm tag-react">React.js</span>, 
            <span class="tag-sm tag-nextjs">Next.js</span>, 
            <span class="tag-sm tag-typescript">TypeScript</span>, 
            <span class="tag-sm tag-graphql">GraphQL</span>, 
            <span class="tag-sm tag-firebase">Firebase</span>, 
            <span class="tag-sm tag-tailwind-css">Tailwind CSS</span>. 
            Hold your horses😆, these new technologies will have subsequent versions with better features and optimization 🚀🚀🚀.
          </p>
          <p>
            And this app was built with only 
            <span class="tag-sm tag-js">Javascript</span>, 
            preprocessor <span class="tag-sm tag-sass">SCSS</span>.
          </p>
        </div>
      </div>
      <br>
      If you would like to view the source code, 
      <a href="https://github.com/anIcedAntFA/quiz_app_version_1.2--vanillaJS" target="_blank">
        <i class="fa-solid fa-file-code"></i>
        <span>click here</span>
        <i class="fa-solid fa-file-code"></i>.
      </a>
      <br>
      Thank you for experiencing the application. If you have any questions or ideas, please send them to us at
      <a href="mailto:anicedfaant@gmail.com">anicedfaant@gmail.com</a>.
      <br>
      <br>
      I would like to thank
      <a href="https://www.facebook.com/sondnf8" target="_blank"><span>Mr. Sơn Đặng</span></a>
      founder
      <a href="https://fullstack.edu.vn/" target="_blank"><span>F8</span></a>,
      <a href="https://blog.webdevsimplified.com/" target="_blank"><span>Web Dev Simplified</span></a> 
      for helping me establish a strong skillset and invaluable experience; 
      bros Quang Nguyễn, Hoai Nhon 
      for brainstorming new ideas and helping me fix bugs to finish my first project 💖💖💖.
    `,
    type: 'info',
  });
};

const renderErrorAppLanguage = () => {
  modal({
    title: 'Feature Error',
    message: `
      This feature is 
      <span style="font-family: 'fira-code-bold', sans-serif">under development</span> 🪛🛠️⚙️. 
      We will finish it as soon as possible. 
      <br/>
      <br/>
      Sorry for the inconvenience 🥲. 
    `,
    type: 'error',
  });
};

const renderWarningDuplicateName = () => {
  modal({
    title: 'Nickname Warning',
    message: `
      Keep calm Bro!
      <br>
      This username/nickname already exists in our database. 💔. If you have created this username from your last play,  
      you could opt to have it reset to your latest result by pressing the 
      <span style="font-family: 'cubano', sans-serif; font-size: var(--font-size-body); color: var(--green)">agree button</span> 
      and save a new one.
      <br>
      If not, please close this pop-up, then type an another cool 💓nickname💓.
      <br>
      <br>
      Sorry for the inconvenience 😇.
    `,
    type: 'warning',
    keyBtn: true,
    handleKeyBtn() {
      isSavedPlayerName = true;
      warningDuplicateNameTimerId = setTimeout(() => {
        showSuccessToastNameAgain();
      }, 400);
    },
  });
};

const renderWarningSettings = () => {
  modal({
    title: 'Settings Warning',
    message: `
      The current level is set by 
      <span style="font-family: 'fira-code-bold', sans-serif; color: var(--orange-dark); text-transform: uppercase">default</span>. 
      <br>
      If you would like to adjust the game\'s level, please close this pop-up, press
      <span style="font-family: 'cubano', sans-serif; font-size: var(--font-size-body); color: var(--pink)">settings button</span> 
      at the homepage to go to settings and select the desired level.
      <br>
      If you would not change it, press the 
      <span style="font-family: 'cubano', sans-serif; font-size: var(--font-size-body); color: var(--green)">agree button</span> 
      below then press the 
      <span style="font-family: 'cubano', sans-serif; font-size: var(--font-size-body); color: var(--blue)">continue button</span> 
      at the homepage to go forward.
    `,
    type: 'warning',
    keyBtn: true,
    handleKeyBtn() {
      isSavedPlayerSettings = true;
      warningDefaultSettingsTimerId = setTimeout(() => {
        showSuccessToastDefaultSettings();
      }, 400);
    },
  });
};

const renderWarningRules = () => {
  modal({
    title: 'Rules Warning',
    message: `
      Keep calms Bro!
      <br>
      If you choose 
      <span style="font-family: 'fira-code-bold', sans-serif;">'disagree'</span>, 
      you could not start the game. 
      <br>
      Please close this pop-up, read the rules and select 
      <span style="font-family: 'fira-code-bold', sans-serif;">'agree'</span>, 
      then press the 
      <span style="font-family: 'cubano', sans-serif; font-size: var(--font-size-body); color: var(--blue)">start button</span> 
      below to enjoy the game.
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
  renderErrorAppLanguage,
  renderWarningDuplicateName,
  renderWarningSettings,
  renderWarningRules,
  renderThankYouMessage,
};
