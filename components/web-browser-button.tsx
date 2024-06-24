import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import * as WebBrowser from "expo-web-browser";
import Constants from "expo-constants";

interface WebBrowserButtonProps {
  url: string;
}

export default function WebBrowserButton({ url }: WebBrowserButtonProps) {
  const [result, setResult] = useState<string | null>(null);

  const handlePressButtonAsync = async () => {
    try {
      let response = await WebBrowser.openBrowserAsync(url);
      setResult(JSON.stringify(response));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Open WebBrowser" onPress={handlePressButtonAsync} />
      <Text>here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight || 0,
    backgroundColor: "blue",
  },
});
