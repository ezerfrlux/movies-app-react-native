import MovieDescription from "@/presentation/components/movie/MovieDescription";
import MovieHeader from "@/presentation/components/movie/MovieHeader";
import { useMovie } from "@/presentation/hooks/useMovie";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();
  const { movieQuery } = useMovie(+id);

  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className="flex items-center justify-center flex-1">
        <Text className="mb-4">Espere por favor</Text>
        <ActivityIndicator color={"purple"} size={30} />
      </View>
    );
  }

  return (
    <ScrollView>
      <MovieHeader
        poster={movieQuery.data.poster_path}
        originalTitle={movieQuery.data.original_title}
        title={movieQuery.data.title}
      />

      <MovieDescription  movie={movieQuery.data}/>
    </ScrollView>
  );
};

export default MovieScreen;
