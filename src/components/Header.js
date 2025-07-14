import React from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/fireBase';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/Slices/UserSlice.js';
import { NETFLIX_LOGO, SUPPORTED_LANG } from '../utils/Constants.js';
import { toggleGptSearchview } from '../utils/Slices/gptSlice.js';
import { changeLanguage } from '../utils/Slices/configSlice.js';

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        navigate('/error');
      });
  };

  const handleGptSearchView = () => {
    dispatch(toggleGptSearchview());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target?.value));
    console.log(e.target?.value);
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
    <div className="absolute z-10 bg-gradient-to-b from-black w-screen flex justify-between items-center px-6 h-20">
      <img className="w-44" src={NETFLIX_LOGO} alt="netflix_logo" />

      {user?.email && location.pathname !== '/' && (
        <div className="flex items-center space-x-4">
          {showGptSearch && (
            <select
              className="m-4 px-4 py-[5px] rounded-md bg-gray-800 text-white "
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANG.map((lang) => (
                // Modular coding
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-white font-semibold bg-red-600 hover:bg-red-500 px-4 py-1 rounded-md transition-colors duration-300"
            onClick={handleGptSearchView}
          >
            {!showGptSearch ? 'GPT Search' : '🏠 Home'}
          </button>
          <img
            className="w-8 h-8 rounded-sm"
            alt="userIcon"
            src={user?.photoURL}
          />
          <button
            className="text-white font-semibold bg-red-600 hover:bg-red-500 px-4 py-1 rounded-md transition-colors duration-300"
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
