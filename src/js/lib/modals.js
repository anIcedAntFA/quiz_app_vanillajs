function modal({ title = '', message = '', type = 'info' }) {
  if (modalWrapperElement) {
    const modalElement = document.createElement('div');
    const icons = {
      success: 'fa-solid fa-circle-check',
      info: 'fa-solid fa-circle-info',
      warning: 'fa-solid fa-triangle-exclamation',
      error: 'fa-solid fa-circle-exclamation',
    };
    const icon = icons[type];

    modalElement.classList.add('modal', `modal--${type}`);
    modalElement.innerHTML = `
      
    `;
  }
}
