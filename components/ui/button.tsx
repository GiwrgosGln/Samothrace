import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  Dimensions,
  ViewStyle,
} from "react-native";

interface CustomButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  color?: string;
  width?: number;
  borderRadius?: number;
  style?: ViewStyle;
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  color = "#6879f8",
  width = windowWidth * 0.9,
  borderRadius = 5,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: color, width, borderRadius },
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: windowWidth * 0.9,
    paddingVertical: windowHeight * 0.01,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: windowHeight * 0.02,
  },
});

export default CustomButton;
