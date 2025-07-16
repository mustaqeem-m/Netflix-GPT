import { useSelector } from 'react-redux';
import useGetMovieTrailer from '../hooks/useGetMovieTrailer';
import { useMemo } from 'react';
const VideoBackGround = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useGetMovieTrailer(movieId);

  const iframe = useMemo(() => {
    if (!trailerVideo?.key) return <p>Trailer is Loading.....</p>;
    return (
      <iframe
        className="w-screen aspect-video"
        src={`https:/www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&playsinline=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    );
  }, [trailerVideo?.key]);

  return <div className="rounded-3xl">{iframe}</div>;
};

export default VideoBackGround;
