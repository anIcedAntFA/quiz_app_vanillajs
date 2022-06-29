function toast({ title = '', message = '', type = 'info', duration = 4000 }) {
  if (toastWrapperElement) {
    const icons = {
      success: 'fa-solid fa-circle-check',
      info: 'fa-solid fa-circle-info',
      warning: 'fa-solid fa-triangle-exclamation',
      error: 'fa-solid fa-circle-exclamation',
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);

    const toast = document.createElement('div');
    toast.classList.add('toast', `toast--${type}`);
    toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

    toast.innerHTML = `
      <div class="toast__icon">
        <i class="${icon}"></i>
      </div>
      <div class="toast__body">
        <h3 class="toast__title">${title}</h3>
        <p class="toast__msg">${message}</p>
      </div>
      <div class="toast__close">
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div class="toast__progress active"></div>
    `;

    //* Auto remove toast message
    const autoRemoveWrapper = setTimeout(function () {
      toastWrapperElement.removeChild(toast);
    }, duration + 1000); // +1s animation fadeOut

    //* Click to remove toast message
    toast.onclick = (event) => {
      if (event.target.closest('.toast__close')) {
        toastWrapperElement.removeChild(toast);
        clearTimeout(autoRemoveWrapper);
      }
    };

    toastWrapperElement.appendChild(toast);
  }
}

export default toast;
