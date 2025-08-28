import { HttpAdapter } from "../../../config/adapters/http/http.adaptar";
import { NowPlayingResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";

export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const response = await fetcher.get<NowPlayingResponse>('/now_playing');
        return response.results.map(MovieMapper.fromMovieDBResultToEntity);
    } catch (error) {
        throw new Error(`Error fetching movies - NowPlaying: ${error}`);
    }
}
