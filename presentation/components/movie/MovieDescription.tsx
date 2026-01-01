import { Formatter } from "@/helpers/formatter";
import { CompleteMovie } from "@/infrastructure/interfaces/moviedb-response";
import React from "react";
import { Text, View } from "react-native";

interface Props {
  movie: CompleteMovie;
}

const MovieDescription = ({ movie }: Props) => {
  return (
    <View className="mx-5">
      <View className="flex flex-row">
        <Text>Rating: {movie.vote_average}</Text>
        <Text> - {movie.genres.join(", ")}</Text>
      </View>
      <Text className="mt-5 font-bold"> History</Text>
      <Text className="mt-2 font-normal">{movie.description}</Text>

      <Text className="mt-2 text-2xl font-bold">
        Budget: {Formatter.currency(movie.budget)}
      </Text>
    </View>
  );
};

export default MovieDescription;
