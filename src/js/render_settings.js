import { addHide, removeHide } from './common_function.js';
//************************************************************************************************************

function renderGameSettings() {
  [appHomeElement, highScoresBtnElement, continueBtnElement, settingBtnElement].forEach((element) =>
    addHide(element),
  );
  [exitBtnElement, submitBtnElement, appSettingElement].forEach((element) => removeHide(element));
  appControlsElement.style.margin = '0';
}

export default renderGameSettings;
