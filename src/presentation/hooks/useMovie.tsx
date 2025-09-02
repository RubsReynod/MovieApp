import { useEffect, useState } from 'react'
import type { FullMovie } from '../../core/entities/movie.entity';
import * as useCases from '../../core/use-cases';
import { movieDBFetch } from '../../config/adapters/movieDB.adapters';

const useMovie = (movieId: number) => {
  const [movie, setMovie] = useState<FullMovie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMovie()
  }, [movieId])

  const loadMovie = async () => {
    setLoading(true);
    try {
      const responseMovie = await useCases.getMovieByIdUseCase(movieDBFetch, movieId);
      setMovie(responseMovie);
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
