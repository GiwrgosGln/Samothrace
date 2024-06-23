import DestinationsGrid from "@/components/destination-grid";
import { View, ImageBackground, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const image = require("../../assets/images/wallpaper.webp");

export default function HomeScreen() {
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
      {/* <View
        style={{
          width: "100%",
          height: "35%",
          borderBottomRightRadius: 40,
          overflow: "hidden",
        }}
      >
        <ImageBackground
          source={image}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.6)",
              width: "100%",
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "600",
                color: "white",
                marginTop: 50,
              }}
            >
              Samothrace
            </Text>
          </View>
        </ImageBackground>
      </View> */}
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
