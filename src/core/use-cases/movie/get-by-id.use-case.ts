import {HttpAdapter} from "../../../config/adapters/http/http.adaptar";
import { MovieMapper } from "../../../infraestructure/mappers/movie.mapper";
import { FullMovie } from "../../entities/movie.entity";
import { MovieDB } from "../../../infraestructure/interfaces/movie-db.responses";

export const getMovieByIdUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<FullMovie> => {
    try {
        const response = await fetcher.get<MovieDB>(`/${movieId}`);
        return MovieMapper.fromMovieDBResultToFullEntity(response);
    } catch (error) {
        throw new Error(`Error fetching movie - ${movieId}: ${error}`);
    }
}