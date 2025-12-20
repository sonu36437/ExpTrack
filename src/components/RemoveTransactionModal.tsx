import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Expense } from "../model/Expense";

export default function RemoveTransactionModal({onNoClick,onYesClick}:{onNoClick:()=>void,onYesClick:()=>void}) {
  return (
    <View style={styles.overlay}>
      <View style={styles.card}>
        <Text style={styles.title}>Remove transaction?</Text>
        <Text style={styles.subtitle}>
          This action can’t be undone
        </Text>

        <View style={styles.actions}>
          <Pressable 
          style={[styles.button, styles.secondary]} 
          onPress={onNoClick}
          >
            <Text style={styles.secondaryText}>No</Text>
          </Pressable>

          <Pressable style={[styles.button, styles.primary]}>
            <Text style={styles.primaryText}>Yes</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
  
    justifyContent: "center",
    alignItems: "center",
    position:'absolute',
    top:0,
    bottom:0,
    left:0,
    right:0,
    zIndex:999

  },
  card: {
    width: "88%",
    backgroundColor: "#000",
    borderRadius: 20,
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 13,
    color: "#aaa",
    textAlign: "center",
    marginTop: 8,
  },
  actions: {
    flexDirection: "row",
    marginTop: 24,
    gap: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
  primary: {
    backgroundColor: "#fff",
  },
  secondary: {
    borderWidth: 1,
    borderColor: "#444",
  },
  primaryText: {
    color: "#000",
    fontSize: 15,
    fontWeight: "600",
  },
  secondaryText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
  },
});
