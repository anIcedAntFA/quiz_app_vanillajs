import theme from './theme.js';
import { renderInfoList, handleEvents } from './app.js';

function init() {
  theme();
  renderInfoList();
  handleEvents();
}

init();
