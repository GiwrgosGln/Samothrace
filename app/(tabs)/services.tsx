import WebBrowserButton from "@/components/web-browser-button";
import { View, Text } from "react-native";

export default function ServicesScreen() {
  return (
    <View style={{ marginTop: 60 }}>
      <Text>Services</Text>
      <WebBrowserButton url="www.google.gr" />
    </View>
  );
}
