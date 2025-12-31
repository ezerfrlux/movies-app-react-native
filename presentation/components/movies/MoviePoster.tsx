import { Image, Pressable } from "react-native";

interface Props {
  id: number;
  poster: string;
  smallPoster?: boolean;
  className?: string;
}

const MoviePoster = ({ id, poster, smallPoster = false , className}: Props) => {
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  const imageUrl = `${IMAGE_BASE_URL}${poster}`


  return (
    <Pressable className={`px-2 active:opacity-90 ${className}`}>
      <Image
        source={{ uri:   imageUrl }}
        className="w-full h-full shadow-lg rounded-2xl"
        style={{ 
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250
        }}
        resizeMode="cover"
      />
    </Pressable>
  );
};

export default MoviePoster;
