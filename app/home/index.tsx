import MainSlidesShow from "@/presentation/components/movies/MainSlidesShow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const safeArea = useSafeAreaInsets()

  const { nowPlayingQuery , popularQuery} = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="items-center justify-center flex-1">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    <View className="mt-2" style={{paddingTop: safeArea.top}}>
      <Text className="px-4 mb-2 text-3xl font-bold">Movie App</Text>
      <MainSlidesShow movies={nowPlayingQuery.data?.results ?? []} />

      <MovieHorizontalList movies={popularQuery.data?.results ?? []} title="Populares" />
   
    </View>
  )
}
