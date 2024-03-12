import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";

export default function TestScreen() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");

  return (
    <SafeAreaView>
      <Text style={{ paddingLeft: 20 }}>Weight (KG)</Text>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Enter your weight"
      />
      <Text style={{ paddingLeft: 20, paddingTop: 20 }}>Height (CM)</Text>
      <TextInput
        style={styles.input}
        onChangeText={setNumber}
        value={number}
        placeholder="Enter your height"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
