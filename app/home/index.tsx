import MainSlidesShow from "@/presentation/components/movies/MainSlidesShow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const safeArea = useSafeAreaInsets();

  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="items-center justify-center flex-1">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="pb-10 mt-2" style={{ paddingTop: safeArea.top }}>
        <Text className="px-4 mb-2 text-3xl font-bold">Movie App</Text>
        <MainSlidesShow movies={nowPlayingQuery.data?.results ?? []} />

        <MovieHorizontalList
          movies={popularQuery.data?.results ?? []}
          title="Popular"
          className="mb-5"
        />
        <MovieHorizontalList
          movies={topRatedQuery.data?.results ?? []}
          title="Top Rated"
          className="mb-5"
        />
        <MovieHorizontalList
          movies={upcomingQuery.data?.results ?? []}
          title="Upcoming"
          className="mb-5"
        />
      </View>
    </ScrollView>
  );
}
