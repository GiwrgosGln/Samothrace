import DestinationsGrid from "@/components/destination-grid";
import { View, ImageBackground, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DiscoverScreen() {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20, marginTop: 60 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: 700 }}>Discover</Text>
        <Ionicons name="notifications-outline" size={30} color="black" />
      </View>
      <View
        style={{
          flex: 1,
          marginTop: 20,
          width: "100%",
        }}
      >
        <DestinationsGrid />
      </View>
    </View>
  );
}
