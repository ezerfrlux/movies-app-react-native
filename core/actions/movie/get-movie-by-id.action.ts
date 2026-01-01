import { movieApi } from "@/core/api/movie-api";
import { MovieDBMovieResponse } from "@/infrastructure/interfaces/moviedb-movie.response";
import { CompleteMovie } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mapper/movie.mapper";

export const getMovieByIdAction = async (id:number | string): Promise<CompleteMovie> => {
  try {
    const {data} = await movieApi.get<MovieDBMovieResponse>(`/${id}`)
    
    return MovieMapper.fromTheMovieDBToCompleteMovie(data)
  }catch(error){
    console.log(error);
    throw "Can't load now playing movies."
    
  }
}
