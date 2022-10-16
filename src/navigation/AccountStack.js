import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account";

import colors from "../styles/colors";

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.fontLight,
        headerStyle: { backgroundColor: colors.bgDark },
        cardStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Stack.Screen
        name="account"
        component={Account}
        options={{ title: "Cuenta", headerShown: false }}
      />
    </Stack.Navigator>
  );
}
