import { nowPlayingAction } from "@/core/actions/movies/now-palying.action";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies"],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24 // 24 horas data fresca
  });

  return {
    nowPlayingQuery,
  };
};
