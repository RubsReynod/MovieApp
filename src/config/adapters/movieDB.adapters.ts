import { AxiosAdapter } from "./http/axios.adaptar";

export const movieDBFetch = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie/',
    params: {
        api_key: 'ccc6683c76deefa8536b239237d00240',
        language: 'es',
    },
});