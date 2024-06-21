import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const destinations = [
  {
    title: "Sanctuary of the Great Gods",
    image:
      "https://www.insamothraki.com/poze/a/cover/the-sanctuary-of-the-great-gods-81sm6.jpg",
    category: "Other",
  },
  {
    title: "Fonias Waterfalls",
    image: "https://example.com/images/fonias-waterfalls.jpg",
    category: "Other",
  },
  {
    title: "Pachia Ammos Beach",
    image: "https://example.com/images/pachia-ammos-beach.jpg",
    category: "Beaches",
  },
  {
    title: "Vatos Beach",
    image: "https://example.com/images/vatos-beach.jpg",
    category: "Beaches",
  },
  // Add more destinations with their respective categories
];

const DestinationsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to filter destinations based on selected category
  const filteredDestinations =
    selectedCategory === "All"
      ? destinations
      : destinations.filter(
          (destination) => destination.category === selectedCategory
        );

  return (
    <>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedCategory === "All" && styles.selectedButton,
          ]}
          onPress={() => setSelectedCategory("All")}
        >
          <Text
            style={[
              styles.buttonText,
              selectedCategory === "All" && styles.selectedButtonText,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedCategory === "Beaches" && styles.selectedButton,
          ]}
          onPress={() => setSelectedCategory("Beaches")}
        >
          <Text
            style={[
              styles.buttonText,
              selectedCategory === "Beaches" && styles.selectedButtonText,
            ]}
          >
            Beaches
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedCategory === "Other" && styles.selectedButton,
          ]}
          onPress={() => setSelectedCategory("Other")}
        >
          <Text
            style={[
              styles.buttonText,
              selectedCategory === "Other" && styles.selectedButtonText,
            ]}
          >
            Other
          </Text>
        </TouchableOpacity>
      </View>

      {/* Destinations grid */}
      <View style={styles.destinationsContainer}>
        {filteredDestinations.map((destination, index) => (
          <View key={index} style={styles.destinationItem}>
            <ImageBackground
              source={{ uri: destination.image }}
              style={styles.imageBackground}
              imageStyle={{ borderRadius: 10 }}
            >
              <Text style={styles.title}>{destination.title}</Text>
            </ImageBackground>
          </View>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#f0f0f0",
  },
  selectedButton: {
    backgroundColor: "#183cfe",
  },
  buttonText: {
    fontSize: 16,
    color: "#333",
  },
  selectedButtonText: {
    color: "#fff",
  },
  destinationsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  destinationItem: {
    width: "45%",
    marginVertical: 10,
  },
  imageBackground: {
    width: "100%",
    height: 150,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    color: "#fff",
    paddingVertical: 5,
    width: "100%",
  },
});

export default DestinationsGrid;
