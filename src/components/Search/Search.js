import React, { useState, useEffect } from "react";
import { StyleSheet, View, Keyboard, Animated, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import colors from "../../styles/colors";
export default function Search() {
  return (
    <View style={styles.container}>
      <Searchbar placeholder="Busca tu producto..."></Searchbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgDark,
    paddingVertical: 10,
    paddingHorizontal: 20,
    zIndex: 1,
  },
  containerInput: {
    position: "relative",
    alignItems: "flex-end",
  },
  backArrow: {
    position: "absolute",
    left: 0,
    top: 15,
    color: colors.fontLight,
  },
});
