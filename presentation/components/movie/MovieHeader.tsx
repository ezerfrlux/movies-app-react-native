import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text, useWindowDimensions, View } from "react-native";

interface Props {
  poster:string;
  originalTitle: string;
  title: string;
}

const MovieHeader = ({poster, originalTitle, title}: Props) => {
  const { height } = useWindowDimensions();
  
  return (
    <>

    <View style={{
      position:'absolute',
      zIndex: 99,
      elevation:9,
      top:35,
      left:10
    }}>
      <Pressable onPress={() => router.dismiss()}>
        <Ionicons   name="arrow-back" size={30} color={"white"} className="shadow"/>
      </Pressable>
    </View>

      <View
        style={{ height: height * 0.7 }}
        className="shadow-xl shadow-black/20"
      >
        <View className="flex-1 rounded-b-[25px] overflow-hidden">
          <Image source={{uri: poster}} resizeMode="cover"  className="flex-1" />
        </View>

        <View className="px-5 mt-5">
          <Text className="font-normal">{originalTitle}</Text>
          <Text className="text-2xl font-semibold">{title }</Text>
        </View>
      </View>
    </>
  );
};

export default MovieHeader;
