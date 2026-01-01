import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";

export const upcomingAction = async() => {
  try {
    const {data} = await movieApi.get<MovieDBMoviesResponse>("/upcoming")

    return data
  }catch(error){
    console.log(error);
    throw "Can't load now playing movies."
    
  }
} 