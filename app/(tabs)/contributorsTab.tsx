import { Platform, SafeAreaView, ScrollView, View } from "react-native";

import { useState, useEffect } from "react";
import contributorsData from "@/data/ContributorsData"; // Replace with API call
import ContributorModal from "@/components/NewContributorModal";
import { stylesFunc } from "@/styles/gyft-appStyles";
import { List, Button, Divider, Text } from "react-native-paper";

export default function ContributorsTab() {
  const [contributors, setContributors] = useState([...contributorsData]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setContributors(
      [...contributorsData].sort((a, b) => a.lastName.localeCompare(b.lastName))
    );
  }, []);

  const handleAddContributor = (newContributor: any) => {
    setContributors((prev) =>
      [...prev, newContributor].sort((a, b) =>
        a.lastName.localeCompare(b.lastName)
      )
    );
  };

  const styles = stylesFunc();
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

  return (
    <Container>
      <View style={styles.headerContainer}>
        <Text variant="displaySmall" style={styles.title}>
          Contributors
        </Text>
        <Button mode="contained" onPress={() => setModalVisible(true)}>
          Add
        </Button>
      </View>

      <List.Section>
        {contributors.length === 0 ? (
          <Text style={styles.text}>No contributors for this group.</Text>
        ) : (
          contributors.map((item, index) => (
            <View key={index}>
              <List.Item
                title={`${item.firstName} ${item.lastName}`}
                description={`Balance: $${item.balance?.toFixed(2) || "0.00"}`}
                left={(props) => <List.Icon {...props} icon="account-circle" />}
              />
              <Divider />
            </View>
          ))
        )}
      </List.Section>

      <ContributorModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onContributorAdded={handleAddContributor}
      />
    </Container>
  );
}
