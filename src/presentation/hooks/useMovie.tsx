import { useEffect, useState } from 'react'
import type { Movie } from '../../core/entities/movie.entity';
import * as useCases from '../../core/use-cases';
import { movieDBFetch } from '../../config/adapters/movieDB.adapters';

const useMovie = (movieId: number) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setLoading(true);
    try {
      // const movie = await useCases.moviesDetailUseCase(movieDBFetch, movieId);
      // setMovie(movie);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    movie,
    loading,
  }
}

export default useMovie
