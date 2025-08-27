import React, { useEffect, useState } from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import { movies as mockMovies } from '../../data/movies';

export const MovieListings = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(mockMovies);
  }, []);

  return (
    <div className="movielistings">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          posterUrl={movie.posterUrl}
        />
      ))}
    </div>
  );
};

 