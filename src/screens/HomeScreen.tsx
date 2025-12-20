import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AddExpenseModal from "../components/ExpenseModal";
import RemoveTransactionModal from "../components/RemoveTransactionModal";
import Modal from "../components/Modal";
import TransactionsCard from "../components/TransactionsCard";

import { useExpenseStore } from "../store/expenseStore";

export default function HomeScreen() {
  const [addVisible, setAddVisible] = useState(false);
  const [removeVisible, setRemoveVisible] = useState(false);

  const {
    expenses,
    hydrate,
    totalIncome,
    todaysTransactions,
    currentSelectedTransaction,
    totalAmount,
    totalExpenses,
    setCurrentlySelectedTransaction
  } = useExpenseStore();
  console.log("RmodalVisible =", removeVisible);

  useEffect(() => {
    hydrate();
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
            <Modal visible={removeVisible} animationType="slide" onRequestClose={()=>setRemoveVisible(false)}>

      </Modal>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Expenses</Text>
          <Text style={styles.subTitle}>
            {new Date().toDateString()}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>Total Balance</Text>
          <Text style={styles.balance}>₹{totalAmount}</Text>

          <View style={styles.row}>
            <View>
              <Text style={styles.smallLabel}>Income</Text>
              <Text style={styles.income}>₹{totalIncome}</Text>
            </View>
            <View>
              <Text style={styles.smallLabel}>Expense</Text>
              <Text style={styles.expense}>₹{totalExpenses}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.section}>Todays Transactions</Text>

        <FlatList
          data={todaysTransactions}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 140 }}
          renderItem={({ item }) => (
            <TransactionsCard
              item={item}
              onLongPress={()=>{
            setRemoveVisible(!removeVisible)
            console.log(removeVisible);
            
                
                
              }}
  
            />
          )}
        />

        <TouchableOpacity
          style={styles.fab}
          onPress={() => setAddVisible(true)}
        >
          <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
      </View>


      <AddExpenseModal
        visible={addVisible}
        onClose={() => setAddVisible(false)}
      />
          <Modal visible={removeVisible} animationType="fade" onRequestClose={()=>setRemoveVisible(false)}>
        <RemoveTransactionModal 
         onNoClick={()=>{
          setRemoveVisible(false)
       
          

          setCurrentlySelectedTransaction(null)
        }}  
        onYesClick={()=>{}}
         />
      </Modal>


  
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000",
  },
  subTitle: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
  card: {
    borderWidth: 1,
    backgroundColor: "#000",
    borderColor: "#000",
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  cardLabel: {
    fontSize: 14,
    color: "#fff",
  },
  balance: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
    marginVertical: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  smallLabel: {
    fontSize: 12,
    color: "#fff",
  },
  income: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  expense: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  section: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
    color: "#000",
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 100,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  fabText: {
    color: "#fff",
    fontSize: 32,
    lineHeight: 36,
  },
});
