import axios from 'axios';
import { TMDBResponse } from '../interfaces/generalInterfaces';

const API_KEY = '4cdd49f9d83b15f83d8bb29802686efc'; // Substitua pela sua chave da TMDb
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'pt-BR',
  },
});

export const getPopularMovies = async (): Promise<TMDBResponse> => {
  const response = await tmdb.get('/movie/popular');
  return response.data;
};
