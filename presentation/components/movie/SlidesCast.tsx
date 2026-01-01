import { CastCharacter } from "@/infrastructure/interfaces/castdb.response";
import { useRef } from "react";
import { useWindowDimensions, View } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import CastPoster from "./CastPoster";
interface Props {
  cast: CastCharacter[];
}
export default function SlidesCast({ cast }: Props) {
  const ref = useRef<ICarouselInstance>(null);

  const width = useWindowDimensions().width;
  return (
    <View className="mt-2 mb-10">
      <View style={{ height: 250, width: "100%" }}>
        <Carousel
          ref={ref}
          data={cast}
          renderItem={({ item }) => (
            <CastPoster
              poster={item.profile_path}
              id={item.id}
              name={item.name}
              smallPoster={false}
              character={item.character}
              department={item.department}
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
    </View>
  );
}
