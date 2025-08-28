import { HttpAdapter } from "../../../config/adapters/http/http.adaptar";
import { MovieMapper } from "../../../infraestructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";
import { PopularResponse } from "../../../infraestructure/interfaces/movie-db.responses";

export const moviesPopularUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const response = await fetcher.get<PopularResponse>('/popular');
        return response.results.map(MovieMapper.fromMovieDBResultToEntity);
    } catch (error) {
        throw new Error(`Error fetching movies - Popular: ${error}`);
    }
}
