import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  Text,
} from "react-native";

import { layoutStyle } from "../styles";
import LoginForm from "../components/Auth/LoginForm";
import RegisterForm from "../components/Auth/RegisterForm";

import logo from "../../assets/logo.png";
import { RootSiblingParent } from "react-native-root-siblings";

export default function LoginScreen() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <View style={layoutStyle.container}>
      <RootSiblingParent>
        <Image style={styles.logo} source={logo} />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {showLogin ? (
            <LoginForm inForm setShowLogin={setShowLogin} />
          ) : (
            <RegisterForm setShowLogin={setShowLogin} />
          )}
        </KeyboardAvoidingView>
      </RootSiblingParent>
    </View>
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
