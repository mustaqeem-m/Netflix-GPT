import React from 'react';
import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants';

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config?.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black grid grid-cols-12 w-1/2 rounded-lg">
        <input
          type="text"
          className="p-4 m-[6px] col-span-9 rounded-md"
          placeholder={lang[langKey].gptSearchPlaceholder}
        ></input>
        <button className="col-span-3 bg-red-800 py-2 px-4 m-[6px] text-white rounded-lg text-2xl font-bold">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
