import { HttpAdapter } from "../../../config/adapters/http/http.adaptar";
import { MovieMapper } from "../../../infraestructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";
import { TopRatedResponse } from "../../../infraestructure/interfaces/movie-db.responses";

export const moviesTopRatedUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const response = await fetcher.get<TopRatedResponse>('/top_rated');
        return response.results.map(MovieMapper.fromMovieDBResultToEntity);
    } catch (error) {
        throw new Error(`Error fetching movies - TopRated: ${error}`);
    }
}
