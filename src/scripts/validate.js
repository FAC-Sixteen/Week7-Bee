const validate = (obj) => {
  const lettersAndApostrophesRegex = '/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/';
  const usernameRegex = '/^[a-zA-Z0-9]+([a-zA-Z0-9](_|-|-|.)[a-zA-Z0-9])*[a-zA-Z0-9]+$/';
  const emailRegex = '';
  const passwordRegex = '';

  const firstName = obj.first_name.match(lettersAndApostrophesRegex);
  const lastName = obj.last_name.match(lettersAndApostrophesRegex);
  const username = obj.username.match(usernameRegex);
  const email = obj.username.match(emailRegex);
  const password = obj.username.match(passwordRegex);

  if (obj.first_name.length !== firstName.length) {
  }

  if (obj.last_name.length !== lastName.length) {
  }

  if (obj.username.length !== username.length) {
    return New Error("Your username does not meet the requirements");
  }

  if (obj.email.length !== email.length) {
  }

  if (obj.password.length !== password.length) {
  }

  if (obj.password !== obj.confirmed_password) {
  }



}
