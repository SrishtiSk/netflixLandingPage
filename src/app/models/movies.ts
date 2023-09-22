export interface Movies {
    page: number;
    results?: (ResultsEntity)[] | null;
    total_pages: number;
    total_results: number;
    date: Dates;
  }
  export interface ResultsEntity {
    adult: boolean;
    backdrop_path: string;
    genre_ids?: (number)[] | null;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  export interface Dates{
    minimum: string;
    maximim: string;
  }
  