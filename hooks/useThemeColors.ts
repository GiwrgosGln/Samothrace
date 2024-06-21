import { useTheme } from "@/contexts/ThemeContext";
import { Colors } from "@/constants/Colors";

export const useThemeColors = () => {
  const { theme } = useTheme(); // Access the current theme
  const currentTheme = theme as keyof typeof Colors; // Use type assertion

  // Determine the appropriate colors based on the current theme
  const colors = Colors[currentTheme];

  return colors;
};
