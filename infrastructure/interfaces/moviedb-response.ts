export interface MovieDBMoviesResponse {
  dates:         Dates;
  page:          number;
  results:       Result[];
  total_pages:   number;
  total_results: number;
}

export interface Dates {
  maximum: Date;
  minimum: Date;
}

export interface Result {
  adult?:             boolean;
  backdrop_path:     string;
  genre_ids?:         number[];
  id:                number;
  original_language?: OriginalLanguage;
  original_title:    string;
  description:          string;
  popularity?:        number;
  poster_path:       string;
  releaseDate:      Date;
  title:             string;
  video?:             boolean;
  vote_average:      number;
  vote_count?:        number;
}

export enum OriginalLanguage {
  En = "en",
  Es = "es",
  Fi = "fi",
}


export interface CompleteMovie extends Result{
  genres: string[];
  duration: number;
  budget: number;
  ProductionCompanies: string[];
}