// export const NETFLIX_LOGO =
//   'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg';

export const NETFLIX_LOGO = '/moviegpt-logo.png';

export const USER_AVATAR =
  'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png';

export const BG_IMAGE =
  'https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg';

export const NOW_PLAYING_URL =
  'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

export const POPULAR_URL =
  'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

export const UPCOMING_URL =
  'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';

export const TOP_RATED_URL =
  'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

export const TV_SERIES_URL =
  'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1';

export const POSTER_IMG_URL = 'https://image.tmdb.org/t/p/w400/';

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_KEY;

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY,
  },
};

export const SUPPORTED_LANG = [
  { identifier: 'en', name: 'English' },
  { identifier: 'hindi', name: 'Hindi' },
  { identifier: 'spanish', name: 'Spanish' },
  { identifier: 'tamil', name: 'Tamil' },
];
