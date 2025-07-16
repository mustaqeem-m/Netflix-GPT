import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;
  return (
    <div className=" text-white w-full overflow-hidden ">
      <h1 className="pt-10 pl-7 text-2xl font-semibold">{title}</h1>

      <div className="flex overflow-x-auto scrollbar-hide space-x-8 px-4 py-4">
        {movies.map((movies) => (
          <MovieCard
            key={movies.id}
            posterPath={movies.poster_path}
            title={movies.title || movies.name}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
