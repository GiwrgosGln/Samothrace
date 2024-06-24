import { BlurView } from "expo-blur";
import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const destinations = [
  {
    title: "Sanctuary of the Great Gods",
    image:
      "https://www.insamothraki.com/poze/a/cover/the-sanctuary-of-the-great-gods-81sm6.jpg",
    category: "Sights",
  },
  {
    title: "Fonias Waterfalls",
    image: "https://www.in.gr/wp-content/uploads/2018/08/fonias.png",
    category: "Waterfalls",
  },
  {
    title: "Pachia Ammos",
    image:
      "https://www.travel.gr/wp-content/uploads/2023/05/93.-samothraki-paxia-ammos-064072-scaled.jpg",
    category: "Beach",
  },
  {
    title: "Vatos",
    image:
      "https://www.insamothraki.com/poze/a/cover/vatos-beach-samothraki-28213.jpg",
    category: "Beach",
  },
];

const categories = ["Beach", "Waterfalls", "Sights", "Mountain"];

const DestinationsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("Beach");

  const filteredDestinations = destinations.filter(
    (destination) => destination.category === selectedCategory
  );

  return (
    <>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "row",
            justifyContent: "center",
            paddingBottom: 10,
          }}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={{
                paddingHorizontal: 20,
                paddingVertical: 10,
                marginHorizontal: 5,
                alignItems: "center",
                marginBottom: 10,
              }}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: selectedCategory === category ? "black" : "gray",
                  fontWeight: selectedCategory === category ? 700 : 300,
                }}
              >
                {category}
              </Text>
              {selectedCategory === category && (
                <View
                  style={{
                    height: 4,
                    width: 4,
                    backgroundColor: "black",
                    borderRadius: 2,
                    marginTop: 2,
                  }}
                />
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filteredDestinations.map((destination, index) => (
          <View
            key={index}
            style={{
              width: 220,
              marginRight: 25,
            }}
          >
            <ImageBackground
              source={{ uri: destination.image }}
              style={{
                width: "100%",
                height: 300,
                justifyContent: "flex-end",
                alignItems: "center",
                overflow: "hidden",
                borderRadius: 10,
              }}
              imageStyle={{ borderRadius: 10 }}
            >
              <BlurView
                tint="dark"
                intensity={100}
                style={{ width: "100%", height: 60, justifyContent: "center" }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "semibold",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  {destination.title}
                </Text>
              </BlurView>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default DestinationsGrid;
