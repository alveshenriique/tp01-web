export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
  }
  
  export interface TMDBResponse {
    page: number;
    results: Movie[];
    total_results: number;
    total_pages: number;
  }