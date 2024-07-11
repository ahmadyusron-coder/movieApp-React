export interface Movie {
    id: number;
    title: string;
    vote_average: number;
    poster_path: string;
    backdrop_path: string;
  }
  
  export interface MovieItemProps {
    movie: Movie;
    size: {
      height: number;
      width: number;
    };
    coverType: "poster" | "backdrop";
  }
  
  export interface MovieListProps {
    title: string;
    url: string;
    coverType: "poster" | "backdrop";
    sizeType: "large" | "small";
  }
  