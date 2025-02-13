import { View, Text } from "react-native";
import { Link } from "expo-router";
import React from "react";
import { PaperProvider } from "react-native-paper";
import { lightTheme } from "@/styles/theme";
//fix slow image loading, maybe by using "Preload Assets using expo-asset"
import { Image } from "react-native";
import { stylesFunc } from "@/styles/gyft-appStyles";
import { useTheme, Button } from "react-native-paper";

export default function HomeScreen() {
  const styles = stylesFunc();
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gyft</Text>
      <Image
        source={require("@/assets/images/gifticon.png")}
        style={styles.image}
      />

      <Link href="/contributorsTab" style={styles.buttonRow} asChild>
        <Button mode="contained" style={styles.button}>
          Contributors
        </Button>
      </Link>

      <Link href="/events" style={styles.buttonRow} asChild>
        <Button mode="contained" style={styles.button}>
          Events
        </Button>
      </Link>
      <Text style={styles.subtitle}>Group Gifting. Easy.</Text>
    </View>
  );
}
