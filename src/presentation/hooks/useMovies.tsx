import { useEffect, useState } from 'react'
import type { Movie } from '../../core/entities/movie.entity';
import * as useCases from '../../core/use-cases/movies/now-playing.use-case';
import { movieDBFetch } from '../../config/adapters/movieDB.adapters';

const useMovies = () => {
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        initLoad();
    }, []);

    const initLoad = async () => {
        setLoading(true);
        try {
            const movies = await useCases.moviesNowPlayingUseCase(movieDBFetch);
            setNowPlaying(movies);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }


    return {
        nowPlaying,
        loading,
    }
}

export default useMovies
