import React from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/fireBase';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/Slices/UserSlice.js';
import { NETFLIX_LOGO } from '../utils/Constants.js';

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        navigate('/error');
      });
  };

  useEffect(() => {
    const unSubscibe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uId: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate('/Browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }

      return () => {
        unSubscibe();
      };
    });
  }, [dispatch, navigate]);
  return (
    <div className="absolute z-10 bg-gradient-to-b from-black w-screen flex justify-between">
      <img className="w-44 p-3 m-3 " src={NETFLIX_LOGO} alt="netflix_logo" />
      {user?.email && location.pathname !== '/' && (
        <div className="flex">
          <img
            className="w-8 mx-6 my-7 rounded-sm"
            alt="userIcon"
            src={user?.photoURL}
          />
          <button
            className="text-white font-semibold bg-red-600 my-7 pb-1 rounded-md px-3"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
