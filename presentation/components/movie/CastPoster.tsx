import { Image, Text, View } from "react-native";
import { Department } from '../../../infrastructure/interfaces/castdb.response';

interface Props {
  id: number;
  poster: string;
  smallPoster?: boolean;
  name: string;
  className?: string;
  character: string | undefined;
  department: Department | undefined
}

const CastPoster = ({
  name,
  id,
  poster,
  smallPoster = false,
  className,
  character,
  department
}: Props) => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  const imageUrl = `${IMAGE_BASE_URL}${poster}`;

  return (
    <View className={`px-2 active:opacity-90 ${className}`}>
      <Image
        source={{ uri: imageUrl }}
        className="w-full h-full shadow-lg rounded-2xl"
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250,
        }}
        resizeMode="cover"
      />
      <Text>{name}</Text>
      <Text>{character}</Text>
      <Text>{department}</Text>
    </View>
  );
};

export default CastPoster;
