import React, { useState, useEffect, useMemo } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import jwtDecode from "jwt-decode";

import AuthScreen from "./src/screens/AuthScreen";
import { StyleSheet, Text, View, Button } from "react-native";
import AuthContext from "./src/context/AuthContext";
import { setTokenApi, getTokenApi, removeTokenApi } from "./src/api/token";

export default function App() {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    (async () => {
      const token = await getTokenApi();
      if (token) {
        console.log("***************************************************");
        console.log("****************Estoy Entrando*********************");
        console.log("***************************************************");
        console.log("Token:");
        console.log(token);
        console.log("***************************************************");

        console.log("jwtDecode TOKEN:");
        console.log(jwtDecode(token));
        console.log("***************************************************");

        setAuth({
          token,
          idUser: jwtDecode(token).id,
        });
      } else {
        setAuth(null);
      }
    })();
  }, []);

  const login = (user) => {
    console.log("LOGIN APP.js");

    setTokenApi(user.jwt);

    setAuth({
      token: user.jwt,
      idUser: user.user._id,
    });
  };

  const logout = () => {
    if (auth) {
      removeTokenApi();
      setAuth(null);
    }
  };

  const authData = useMemo(
    () => ({
      auth,
      login,
      logout,
      //  setReloadUser: null,
    }),
    [auth]
  );

  if (auth === undefined) return null;

  return (
    <AuthContext.Provider value={authData}>
      <PaperProvider>
        {/*         {auth ? <UserNavigation /> : <AuthScreen />}
         */}
        {auth ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text> Zona de Usuarios</Text>
            <Button title="Cerrar Sesion" onPress={authData.logout}>
              {" "}
            </Button>
          </View>
        ) : (
          <AuthScreen />
        )}
      </PaperProvider>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({});
