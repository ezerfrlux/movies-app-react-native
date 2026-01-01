import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";

interface Options {
  page?: number;
  limit?: number;
}

export const topRatedAction = async ({ page, limit = 10 }: Options) => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/top_rated",{
      params:{
        page: page
      }
    });

    return data;
  } catch (error) {
    console.log(error);
    throw "Can't load now playing movies.";
  }
};
