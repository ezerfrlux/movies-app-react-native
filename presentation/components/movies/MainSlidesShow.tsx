import { Movie } from "@/infrastructure/interfaces/moviedb-response";
import { useRef } from "react";
import { useWindowDimensions, View } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import MoviePoster from "./MoviePoster";

interface Props {
  movies: Movie[];
}

export default function MainSlidesShow({ movies = [] }: Props) {
  const ref = useRef<ICarouselInstance>(null);

  const width = useWindowDimensions().width;

  return (
    <View style={{ height: 250, width: "100%" }}>
      <Carousel
        ref={ref}
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster
            poster={item.poster_path}
            id={item.id}
            smallPoster={false}
          />
        )}
        width={200}
        height={350}
        style={{
          width: width,
          height: 350,
          justifyContent: "center",
          alignItems: "center",
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        defaultIndex={1}
      />
    </View>
  );
}
