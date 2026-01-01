import { MovieDBMovieResponse } from "../interfaces/moviedb-movie.response";
import { CompleteMovie } from "../interfaces/moviedb-response";

export class MovieMapper {
  static fromTheMovieDBToCompleteMovie = (movie:MovieDBMovieResponse):CompleteMovie => {
    return {
       id: movie.id,
       title:movie.title,
       description: movie.overview,
       releaseDate: new Date(movie.release_date),
       poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
       backdrop_path: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
       vote_average: movie.vote_average,
       budget: movie.budget,
       duration: movie.runtime,
       genres: movie.genres.map(g => g.name),
       original_title: movie.original_title,
       ProductionCompanies: movie.production_companies.map(c => c.name),
    }
  }
}