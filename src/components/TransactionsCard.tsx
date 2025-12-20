import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Expense, ExpenseType } from '../model/Expense'
import { useExpenseStore } from '../store/expenseStore'


export default function TransactionsCard({ item, onLongPress }: { item: Expense, onLongPress: () => void }) {
  const {setCurrentlySelectedTransaction}=useExpenseStore()
  return (
    <TouchableOpacity style={styles.item}
      onLongPress={() => {
        setCurrentlySelectedTransaction(item)
        onLongPress()
      

      }}

    >
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text
        style={[
          styles.amount,
          item.type == 'expense' ? styles.negative : styles.positive,
        ]}
      >
        {item.type == 'expense' ? '-' + item.amount : "+" + item.amount}
      </Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderColor: "#ccc",
  },
  itemTitle: {
    fontSize: 16,
    color: "#000",
  },
  amount: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  negative: {
    color: 'rgba(255, 81, 0, 1)',
  },
  positive: {
    color: "rgba(53, 125, 8, 1)"
  }
})