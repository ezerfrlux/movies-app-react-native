import { nowPlayingAction } from "@/core/actions/movies/now-palying.action";
import { Stack } from "expo-router";
import "./global.css";
export default function RootLayout() {

  nowPlayingAction()

  return <Stack />;
}
