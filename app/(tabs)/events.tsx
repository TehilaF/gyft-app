import {
  StyleSheet,
  Appearance,
  Platform,
  SafeAreaView,
  ScrollView,
  FlatList,
  View,
  Text,
  Image,
  useColorScheme,
} from "react-native";

import { useEffect, useState } from "react";
import events from "@/data/EventsData";
import { stylesFunc } from "@/styles/gyft-appStyles";

export default function Events() {
  const [sortedEvents, setSortedEvents] = useState([...events]);
  useEffect(() => {
    setSortedEvents(
      [...events].sort((a, b) => b.eventDate.getTime() - a.eventDate.getTime())
    );
  }, []);

  const styles = stylesFunc();
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
  const containerProps =
    Platform.OS === "web"
      ? { contentContainerStyle: styles.contentContainer }
      : { style: styles.contentContainer };

  const headerComponent = <Text>Events</Text>;

  return (
    <Container {...containerProps}>
      <FlatList
        data={sortedEvents}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={headerComponent}
        ListEmptyComponent={<Text>No events for this group.</Text>}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.textRow}>
              <Text style={styles.text}>{item.eventName}</Text>
              <Text style={styles.text}>{item.eventDate.toDateString()}</Text>
            </View>
          </View>
        )}
      />
    </Container>
  );
}
