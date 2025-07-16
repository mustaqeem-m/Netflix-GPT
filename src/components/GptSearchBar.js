import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/languageConstants';
import client from '../utils/openAI';
import { API_OPTIONS } from '../utils/Constants';
import { addSearchMovieList } from '../utils/Slices/gptSlice';

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config?.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const gptQuery =
    '. Give exactly 5 movie names based on this topic, comma-separated only. Do not write anything else.\nExample: If the topic is "space adventure", reply: Interstellar, Gravity, The Martian, Ad Astra, Apollo 13';

  const searchMovieTMDB = async (movie) => {
    const resolvedMovieList = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await resolvedMovieList.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // API call for openAI
    const response = await client.chat.completions.create({
      model: 'gpt-3.5-turbo-0125',
      messages: [
        {
          role: 'system',
          content:
            'You are a professional movie recommender who has watched all movies.',
        },
        {
          role: 'user',
          content: searchText.current.value + gptQuery,
        },
      ],
      temperature: 0.9,
    });

    if (!response.choices) {
      // <Error/>
    }
    //  Now we got movie name like moviea, movieb, ..., moviee
    const gptMovies = response.choices[0]?.message?.content.split(', ');
    if (!gptMovies) return;
    console.log(gptMovies);

    //convert tht into array of movies []
    // search that movies using TMDB search api

    const promiseMovieArr = gptMovies.map((movie) => searchMovieTMDB(movie));
    //[prmoise, promise, ....]

    const resolvedMovieList = await Promise.all(promiseMovieArr);
    console.log(resolvedMovieList);

    dispatch(
      addSearchMovieList({
        movieNames: gptMovies,
        movieList: resolvedMovieList,
      })
    );
  };

  return (
    <div className="pt-[38%] md:pt-[10%] flex justify-center">
      <form
        className="bg-black w-full grid grid-cols-12 md:w-1/2 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-[6px] col-span-9 rounded-md"
          placeholder={lang[langKey].gptSearchPlaceholder} //Dynamic access lang[langKey].search -> lang[en].search -> 'Search'
        ></input>
        <button
          className="col-span-3 bg-red-800 py-2 px-4 m-[6px] text-white rounded-lg text-2xl font-bold"
          onClick={() => {
            handleGptSearchClick();
          }}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
