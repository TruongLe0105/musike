//Validate email
export const isValidEmail = email =>
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

//Validate password
export const isValidPassword = password => password.length >= 5;
