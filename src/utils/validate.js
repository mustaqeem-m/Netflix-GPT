export const checkValidData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(password);

  // console.log('Email Valid:', isEmailValid);
  // console.log('Password Valid:', isPasswordValid);

  if (!isEmailValid) return 'Email Id is not valid!';
  if (!isPasswordValid) return 'Password is not valid!';

  return null;
};

export const ValidateUserName = (userName) => {
  const isUserNameValid = /^[a-zA-Z0-9_]{3,20}$/.test(userName);
  if (!isUserNameValid) return 'userName is not valid';
};
