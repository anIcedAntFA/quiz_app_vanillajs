function renderAppHome() {
  appHomeElement.innerHTML = `
    <p class="home__title">Welcome to the Quiz! 🐳</p>
    <form action="" class="form__group" data-form-group>
      <label for="nickname" class="form__label"
        >Do you have a 🔥<span>Cool Nickname</span>🔥</label
      >
      <input
        id="nickname"
        name="nickname"
        type="text"
        placeholder="Let's type your cool nickname, then press 🚀CONTINUE🚀"
        class="form__control"
        data-form-control
      />
      <span class="form__message" data-form-message></span>
    </form>
  `;

  inputElement.addEventListener('focusout', validateInput);
  inputElement.addEventListener('input', setValid);
}

renderAppHome();
