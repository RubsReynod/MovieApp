import type { FullMovie, Movie } from "../../core/entities/movie.entity";
import type { MovieDB } from "../interfaces/movie-db.responses";

export class MovieMapper {
    static fromMovieDBResultToEntity(result: MovieDB): Movie {
        return {
            id: result.id,
            title: result.title,
            description: result.overview,
            releaseDate: new Date(result.release_date),
            rating: result.vote_average,
            poster: result.poster_path ? `https://image.tmdb.org/t/p/w500${result.poster_path}` : null,
            backdrop: result.backdrop_path ? `https://image.tmdb.org/t/p/w500${result.backdrop_path}` : null,
        };
    }

    static fromMovieDBResultToFullEntity(result: MovieDB): FullMovie {
        return {
            id: result.id,
            title: result.title,
            description: result.overview,
            releaseDate: new Date(result.release_date),
            rating: result.vote_average,
            poster: result.poster_path ? `https://image.tmdb.org/t/p/w500${result.poster_path}` : null,
            backdrop: result.backdrop_path ? `https://image.tmdb.org/t/p/w500${result.backdrop_path}` : null,
            genres: result.genres.map((genre) => genre.name),
            duration: result.runtime || 0,
            budget: result.budget || 0,
            originalTitle: result.original_title,
            productionCompanies: result.production_companies.map((company) => company.name),
        };
    }
}
