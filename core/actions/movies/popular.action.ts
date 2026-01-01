import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";

interface Params {
  page?: number;
  limit?: number;
}

export const popularMoviesAction  = async({page, limit}:Params) => {
  try {
    const {data} = await movieApi.get<MovieDBMoviesResponse>("/popular",{
      params:{page}
    })

    return data
  }catch(error){
    console.log(error);
    throw "Can't load now playing movies."
    
  }
} 