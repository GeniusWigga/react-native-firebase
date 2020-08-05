import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import iid from "@react-native-firebase/iid";

async function getInstanceId() {
  return iid().get();
}

export default function App() {
  const [instance, onInstance] = useState(null);

  useEffect(() => {
    iid()
      .get()
      .then(onInstance);
  }, []);

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(instance)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
