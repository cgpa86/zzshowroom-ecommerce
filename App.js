import React, { useState, useEffect, useMemo, View } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import AuthScreen from "./src/screens/AuthScreen";
import { StyleSheet, Text } from "react-native";

export default function App() {
  const [auth, setAuth] = useState(undefined);

  return (
    <PaperProvider>{auth ? <UserNavigation /> : <AuthScreen />}</PaperProvider>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
});
