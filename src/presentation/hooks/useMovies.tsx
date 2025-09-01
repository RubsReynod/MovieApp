import { useEffect, useState } from 'react'
import type { Movie } from '../../core/entities/movie.entity';
import * as useCases from '../../core/use-cases';
import { movieDBFetch } from '../../config/adapters/movieDB.adapters';

let popularPage = 1;

const useMovies = () => {
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [upcoming, setUpcoming] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        initLoad();
    }, []);

    const initLoad = async () => {
        setLoading(true);
        try {
            const moviesPromise = useCases.moviesNowPlayingUseCase(movieDBFetch);
            const moviesUpcomingPromise = useCases.moviesUpcomingUseCase(movieDBFetch);
            const moviesTopRatedPromise = useCases.moviesTopRatedUseCase(movieDBFetch);
            const moviesPopularPromise = useCases.moviesPopularUseCase(movieDBFetch, { page: popularPage });

            const [movies, moviesUpcoming, moviesTopRated, moviesPopular] = await Promise.all([
                moviesPromise,
                moviesUpcomingPromise,
                moviesTopRatedPromise,
                moviesPopularPromise,
            ]);

            setNowPlaying(movies);
            setUpcoming(moviesUpcoming);
            setTopRated(moviesTopRated);
            setPopular(moviesPopular);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const loadMorePopular = async () => {
        popularPage++;
        try {
            const moviesPopular = await useCases.moviesPopularUseCase(movieDBFetch, { page: popularPage });
            setPopular(prev => [...prev, ...moviesPopular]);
        } catch (error) {
            console.error(error);
        }
    }


    return {
        nowPlaying,
        upcoming,
        topRated,
        popular,
        loading,
        loadMorePopular,
    }
}

export default useMovies
