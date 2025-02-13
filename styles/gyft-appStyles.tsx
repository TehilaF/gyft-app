import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

export const stylesFunc = () => {
  const theme = useTheme();

  return StyleSheet.create({
    contentContainer: {
      flexGrow: 1,
      backgroundColor: theme.colors.background,
      justifyContent: "center",
      alignItems: "center",
    },
    headerContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between", // Pushes text and button to opposite ends
      width: "100%", // Ensures it spans full width
      paddingHorizontal: 32,
      paddingTop: 32,
      paddingBottom: 16,
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 16,
      fontWeight: "bold",
      color: theme.colors.primary,
    },
    row: {
      flexDirection: "row",
      width: "100%",
      maxWidth: 600,
      height: 100,
      marginBottom: 10,
      borderStyle: "solid",
      borderWidth: 1,
      borderRadius: 20,
      overflow: "hidden",
      marginHorizontal: "auto",
    },
    textRow: {
      width: "65%",
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 5,
      flexGrow: 1,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      alignItems: "flex-end",
      width: "100%",
    },
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.primary,
    },
    modalContent: {
      width: 300,
      backgroundColor: "white",
      padding: 20,
      borderRadius: 10,
      alignItems: "center",
    },
    input: {
      width: "100%",
      borderBottomWidth: 1,
      borderColor: "#ccc",
      marginBottom: 10,
      padding: 8,
    },
    buttonRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: "auto",
    },
    button: {
      alignItems: "center",
      marginTop: 10,
      marginBottom: 20,
    },
    cancelButton: {
      backgroundColor: "red",
    },
    buttonText: {
      color: theme.colors.primary,
      fontWeight: "bold",
    },
    image: {
      width: 100,
      height: 100,
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 15,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 20,
    },
    link: {
      fontSize: 40,
      fontWeight: "bold",
      textAlign: "center",
      textDecorationLine: "underline",
      padding: 4,
      fontFamily: "Arial",
    },
  });
};
