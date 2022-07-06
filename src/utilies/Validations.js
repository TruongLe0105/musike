//Validate email
export const isValidEmail = email =>
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

export const isValidNumber = phoneNumber =>
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phoneNumber);

export const isValidPassword = password => password.length >= 5;
