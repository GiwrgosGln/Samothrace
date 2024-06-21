import DestinationsGrid from "@/components/destination-grid";
import { View, StyleSheet, Platform, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ marginTop: 50, flex: 1 }}>
      <Text style={{ fontSize: 24, fontWeight: 600 }}>Samothrace</Text>
      <View style={{ marginTop: 20 }}>
        <DestinationsGrid />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
