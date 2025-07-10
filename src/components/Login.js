import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData, ValidateUserName } from '../utils/validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/fireBase.js';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/Slices/UserSlice.js';
import { BG_IMAGE, USER_AVATAR } from '../utils/Constants.js';
const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, SetIsSignInForm] = useState(true);

  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);
  const rePassword = useRef(null);

  const [errorMessage, setErrorMessage] = useState(null);

  const handleFormSubmit = () => {
    const emailVal = email.current.value;
    const passwordVal = password.current.value;

    if (isSignInForm) {
      const result = checkValidData(emailVal, passwordVal);
      setErrorMessage(result);
      if (result) return;

      //signIn logic
      signInWithEmailAndPassword(auth, emailVal, passwordVal)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          setErrorMessage('Invalid Login Credentials');
        });
    } else {
      const userNameVal = userName.current?.value;
      const rePasswordValue = rePassword.current?.value;

      const userErr = ValidateUserName(userNameVal);
      if (userErr) {
        setErrorMessage(userErr);
        return;
      }

      const credErr = checkValidData(emailVal, passwordVal);

      if (credErr) {
        setErrorMessage(credErr);
        return;
      }

      if (passwordVal !== rePasswordValue) {
        setErrorMessage('Password do not match');
        return;
      }

      //Signup logic

      createUserWithEmailAndPassword(auth, emailVal, passwordVal)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: userNameVal,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uId: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              console.log(user);
            })
            .catch((error) => {
              setErrorMessage(errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + '-' + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    SetIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_IMAGE} alt="bg-image" />
      </div>

      <form
        className="absolute bg-black bg-opacity-80 text-white p-12 w-3/12 left-0 right-0 mx-auto my-40 rounded-md shadow-lg space-y-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl font-bold text-center">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm ? (
          <input
            ref={userName}
            type="text"
            placeholder="User name"
            className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
          />
        ) : (
          ''
        )}

        <input
          ref={email}
          type="text"
          placeholder="User name or Email address"
          className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
        />

        {!isSignInForm ? (
          <input
            ref={rePassword}
            type="password"
            placeholder="Re-enter password"
            className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
          />
        ) : (
          ''
        )}
        <p className="text-red-600 font-bold">{errorMessage}</p>

        <button
          className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded font-semibold"
          onClick={handleFormSubmit}
        >
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>

        {isSignInForm ? (
          <div>
            <h1 className="text-1xl mx-44">OR</h1>
            <br></br>

            <button className="w-full bg-gray-600 hover:bg-gray-800 text-white py-3 rounded font-semibold">
              Use a Sign in code
            </button>
          </div>
        ) : (
          ''
        )}

        <div className="flex text-white mt">
          <p>{isSignInForm ? 'New to Netflix?' : 'Already registered ? '}</p>
          <p
            className="font-bold cursor-pointer hover:underline "
            onClick={toggleSignInForm}
          >
            {isSignInForm ? 'Sign Up Now' : 'Sign In now'}
          </p>
        </div>

        {isSignInForm ? (
          <h1 className="underline cursor-pointer">Forgot Password</h1>
        ) : (
          ''
        )}
      </form>
    </div>
  );
};

export default Login;
