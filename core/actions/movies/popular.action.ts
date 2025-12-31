import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";

export const popularMoviesAction  = async() => {
  try {
    const {data} = await movieApi.get<MovieDBMoviesResponse>("/popular")

    return data
  }catch(error){
    console.log(error);
    throw "Can't load now playing movies."
    
  }
} 