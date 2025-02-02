import { StatusBar } from "expo-status-bar";
import React from "react";
import Landing from "./src/pages/Landing";
import { AppLoading } from "expo";
import {
  Archivo_400Regular,
  Archivo_700Bold,
  useFonts,
} from "@expo-google-fonts/archivo";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import AppStack from "./src/routes/AppStack";

export default function App() {
  let [fontLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  } else {
    return (
      //esse <> é chamado fragment, serve para agrupar os elementos sem montar um componente em tela
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
}
