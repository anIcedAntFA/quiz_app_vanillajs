function modal({ title = '', message = '', type = 'info', keyBtn = false, handleKeyName }) {
  if (modalWrapperElement) {
    const icons = {
      success: 'fa-solid fa-circle-check',
      info: 'fa-solid fa-circle-info',
      warning: 'fa-solid fa-triangle-exclamation',
      error: 'fa-solid fa-circle-exclamation',
    };
    const icon = icons[type];

    const modalOverlayElement = document.createElement('div');
    modalOverlayElement.classList.add('modal__overlay');

    const modalElement = document.createElement('div');
    modalElement.classList.add('modal', `modal--${type}`);

    if (keyBtn === true) {
      modalElement.innerHTML = `
        <div class="modal__header">
          <div class="modal__title-icon">
            <i class="${icon}"></i>
          </div>
          <div class="modal__title">${title}</div>
          <div class="modal__close-icon" data-modal-close-icon>
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div class="modal__message">${message}</div>
        <div class="btn__wrapper">
          <button class="modal__close-btn btn btn-agree" data-modal-agree-btn>
            Agree
          </button>
          <button class="modal__close-btn btn btn-close" data-modal-close-btn>
            Close
          </button>
        </div>
      `;
    } else {
      modalElement.innerHTML = `
        <div class="modal__header">
          <div class="modal__title-icon">
            <i class="${icon}"></i>
          </div>
          <div class="modal__title">${title}</div>
          <div class="modal__close-icon" data-modal-close-icon>
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div class="modal__message">${message}</div>
        <button class="modal__close-btn btn btn-close" data-modal-close-btn>
          Close
        </button>
      `;
    }

    if (type === 'info' || type === 'success') {
      modalOverlayElement.style.transform = 'scaleY(0.01) scaleX(0)';
      modalOverlayElement.style.animation =
        'unfoldIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards';
      modalElement.style.transform = 'scale(0)';
      modalElement.style.animation = 'zoomIn 0.6s 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards';
    } else {
      modalElement.style.transform = 'translateX(-1500px)';
      modalElement.style.animation =
        'roadRunnerIn 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards';
    }

    modalOverlayElement.appendChild(modalElement);
    modalWrapperElement.appendChild(modalOverlayElement);

    modalElement.addEventListener('click', (event) => {
      event.stopPropagation();

      if (event.target.closest('[data-modal-close-icon], [data-modal-close-btn]')) {
        modalWrapperElement.removeChild(modalOverlayElement);
      }

      if (event.target.closest('[data-modal-agree-btn]')) {
        handleKeyName && handleKeyName();
        modalWrapperElement.removeChild(modalOverlayElement);
      }
    });

    modalOverlayElement.addEventListener('click', () => {
      modalWrapperElement.removeChild(modalOverlayElement);
    });
  }
}

export default modal;
