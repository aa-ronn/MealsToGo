import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import * as firebase from "firebase";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme/index";
import { Navigation } from "./src/infrastructure/navigation/index";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA-lLkL0ixvBTMgm6yxKYV9KQaozoxISzw",
  authDomain: "mealstogo-83641.firebaseapp.com",
  projectId: "mealstogo-83641",
  storageBucket: "mealstogo-83641.appspot.com",
  messagingSenderId: "154977458850",
  appId: "1:154977458850:web:70ec99c58b635d572495fb",
};

//make sure firebase is only initialized once to prevent hot reload error
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

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

  //wrap app in styled-components theme provider (src/infrastructure/theme/index)
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
