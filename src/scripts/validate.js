const validate = obj => {
  return new Promise((resolve, reject) => {
    // console.log(obj.first_name);
    // return;
    const lettersAndApostrophesRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
    const usernameRegex = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-|-|.)[a-zA-Z0-9])*[a-zA-Z0-9]+$/i;
    const emailRegex = /[-.\w]+@([\w-]+\.)+[\w-]{2,20}/i;
    const passwordRegex = /(?=^.{8,20}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;

    const firstName = obj.first_name.match(lettersAndApostrophesRegex);
    const lastName = obj.last_name.match(lettersAndApostrophesRegex);
    const username = obj.username.match(usernameRegex);
    const email = obj.email.match(emailRegex);
    const password = obj.password.match(passwordRegex);
    const confirmedPassword = obj.confirmed_password;
    // console.log(password);

    if (!firstName) {
      reject("Please input a real first name");
    }

    if (!lastName) {
      reject("Please input a real last name");
    }

    if (!username) {
      reject("Your username does not meet the requirements");
    }

    if (!email) {
      reject(new Error("Please input a valid email address"));
    }

    if (!password) {
      if (obj.password.length < 8 || obj.password.length > 20) {
        reject("Please ensure your password is between 8-20 characters long");
      }
    }
    if (obj.password !== obj.confirmed_password) {
      reject("Password does not match");
    }

    //THIS ASSIGNS THE checkUsernameExists FUNCTION TO A VARIABLE AND CALLS IT

    // const checkUsernameExists = getUsername(obj.username);
    //
    // if (checkUsernameExists) {
    //   return new Error("Username already exists");
    // }
    else {
      resolve("New user account details passed the validation checks");
    }
  });
};

module.exports = validate;
