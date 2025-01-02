// /src/types/movieTypes.ts

export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
  }
  
  export interface MovieDetail {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
    release_date: string;
    genres: { id: number; name: string }[];
  }
  // /src/types/movieTypes.ts

export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;

  }
  
  export interface MovieDetail {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
    release_date: string;
    genres: { id: number; name: string }[];
  }
  