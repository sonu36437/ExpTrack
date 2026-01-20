import { View, FlatList, StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import { useExpenseStore } from "../store/expenseStore";
import TransactionsCard from "../components/TransactionsCard";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AllExpenses() {
  const { expenses, hydrate } = useExpenseStore();

  useEffect(() => {
    hydrate();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>All Transactions</Text>
      </View>

      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TransactionsCard
            item={item}
            onLongPress={() => { }}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 16,

    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

  },
  headerSubtitle: {
    fontSize: 12,
    color: "#6b7280",
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 140,
  },
});
