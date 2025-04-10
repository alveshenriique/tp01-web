import { useEffect, useState } from 'react';
import { getPopularMovies } from '../services/tmdbService';
import { Movie } from '../interfaces/generalInterfaces';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w300';
const DEFAULT_IMAGE = 'https://via.placeholder.com/300x450?text=No+Image';

export const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getPopularMovies();
        setMovies(data.results);
      } catch (error) {
        console.error('Erro ao carregar filmes:', error);
        setError('Não foi possível carregar os filmes. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  console.log('Movies:', movies); // Adicione este log para verificar os dados dos filmes

  if (loading) {
    return <p>Carregando filmes...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (movies.length === 0) {
    return <p>Nenhum filme encontrado.</p>;
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' }}>
      {movies.map((movie) => (
        <div
          key={movie.id}
          style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', textAlign: 'center' }}
        >
          <img
            src={movie.poster_path ? IMAGE_BASE_URL + movie.poster_path : DEFAULT_IMAGE}
            alt={movie.title || 'Sem título'}
            style={{ width: '100%', borderRadius: '4px' }}
          />
          <h3 style={{ fontSize: '1rem', margin: '10px 0 5px' }}>{movie.title || 'Título desconhecido'}</h3>
          <p style={{ fontSize: '0.9rem', color: '#888' }}>Nota: {movie.vote_average || 'N/A'}</p>
        </div>
      ))}
    </div>
  );
};