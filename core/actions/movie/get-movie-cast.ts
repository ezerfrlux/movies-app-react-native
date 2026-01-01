import { movieApi } from "@/core/api/movie-api";
import { CastDB } from "@/infrastructure/interfaces/castdb.response";

export const getCastByID = async (id:number | string) => {
  try {
    const {data} = await movieApi.get<CastDB>(`/${id}/credits`)
    
    
    return data
  }catch(error){
    console.log(error);
    throw "Can't load now playing movies."
    
  }
}
