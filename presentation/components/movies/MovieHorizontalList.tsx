import { Movie } from "@/infrastructure/interfaces/moviedb-response";
import React, { useRef } from "react";
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from "react-native";
import MoviePoster from "./MoviePoster";

interface Props {
  movies: Movie[];
  title?: string;
  className?: string;
}

const MovieHorizontalList = ({ movies, title, className }: Props) => {
  
  const isLoading = useRef(false)

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return

    const {contentOffset, layoutMeasurement,contentSize} = event.nativeEvent

    const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width

    if (!isEndReached) return

    isLoading.current = true
    console.log("cargando peliculas");
    
  }

  return (
    <View className={`${className}`}>
      {title && <Text className="px-4 mt-2 text-3xl font-bold">{title}</Text>}
      <FlatList 
        horizontal 
        data={movies} 
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({item}) => <MoviePoster id={item.id} poster={item.poster_path} smallPoster/>} 
        onScroll={onScroll}
      /> 
    </View>
  );
};

export default MovieHorizontalList;
