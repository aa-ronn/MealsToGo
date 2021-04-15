import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme/index";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  //load in google fonts
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  //make sure fonts are loaded before showing the app
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  //wrap app in style-components theme provider (src/infrastructure/theme/index)
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  app: {},
});
