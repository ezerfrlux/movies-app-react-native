import { Movie } from "@/infrastructure/interfaces/moviedb-response";
import React from "react";
import { FlatList, Text, View } from "react-native";
import MoviePoster from "./MoviePoster";

interface Props {
  movies: Movie[];
  title?: string;
}

const MovieHorizontalList = ({ movies, title }: Props) => {
  
  return (
    <View>
      {title && <Text className="px-4 mb-2 text-3xl font-bold">{title}</Text>}
      <FlatList 
        horizontal 
        data={movies} 
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({item}) => <MoviePoster id={item.id} poster={item.poster_path} smallPoster/>} 
      /> 
    </View>
  );
};

export default MovieHorizontalList;
