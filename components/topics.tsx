import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CustomButton from "./ui/button";

const topics = ["All", "Beaches", "Hotels", "Restaurants", "Parks", "Museums"];

const Topics: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>("All");

  const handlePress = (topic: string) => {
    setSelectedTopic(topic);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={topics}
        horizontal
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CustomButton
            title={item}
            onPress={() => handlePress(item)}
            color={item === selectedTopic ? "#6879f8" : "gray"}
            width={100}
            borderRadius={100}
            style={styles.button}
          />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  button: {
    marginHorizontal: 2,
  },
});

export default Topics;
