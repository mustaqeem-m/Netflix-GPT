import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/fireBase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        navigate('/error');
      });
  };
  return (
    <div className="absolute z-10 bg-gradient-to-b from-black w-screen flex justify-between">
      <img
        className="w-44 p-3 m-3 "
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netflix_logo"
      />
      <div className="flex">
        <img
          className="w-8 mx-6 my-7 rounded-sm"
          alt="userIcon"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        />
        <button
          className="text-white font-semibold bg-red-600 my-7 pb-1 rounded-md px-3"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
