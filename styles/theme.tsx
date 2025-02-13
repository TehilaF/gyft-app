import { DefaultTheme, MD3DarkTheme } from "react-native-paper";

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "teal", // Customize your primary color
    secondary: "coral", // Customize your accent color
    background: "offwhite", // Customize background color
  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "teal", // Customize your primary color
    secondary: "coral", // Customize your accent color
    background: "offwhite", // Customize background color
  },
};
