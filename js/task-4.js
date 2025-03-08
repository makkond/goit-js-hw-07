const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();
  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  }
  console.log({ email, password });
  loginForm.reset();
});
