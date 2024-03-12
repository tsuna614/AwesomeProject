import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TestScreen from "./src/screens/TestScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <TestScreen></TestScreen>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
});
