import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
  
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { EXPENSE_CATEGORIES, ExpenseType } from "../model/Expense";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { useExpenseStore } from "../store/expenseStore";


type Props = {
  visible: boolean;
  onClose: () => void;
  onSave?: (data: { title: string; amount: string }) => void;
};

function CategoryItem(){
  return(
    <View style={{flex :1, height:"100%", width:"90%" ,alignSelf:'center',backgroundColor:'red'}}>
      <Text>jdfasljfdj</Text>

    </View>
  )
}

export default function AddExpenseModal({
  visible,
  onClose,

}: Props) {
  const [title, setTitle] = React.useState("");
  const [defaultValue,setDefaultValue]=useState<ExpenseType>('expense');
  const [amount, setAmount] = React.useState("");
  const [desc, setDesc]=useState("");
  const [category,setCategory]=useState("")
  const [categoryItemVisible,setCategoryItemVisible]=useState(false);
 const {
    expenses,
    hydrate,
    hydrated,
    addTransaction,
    removeTransaction,
  } = useExpenseStore();

  const handleSave = () => {
    addTransaction({title:title,type:defaultValue,amount:Number(amount),desc:desc,category:category})  
    setTitle("");
    setAmount("");
    onClose();
    console.log(title);
    
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Add Expense</Text>

          <TextInput
            placeholder="Title"
            placeholderTextColor="#999"
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />

          <TextInput
            placeholder="Amount"
            placeholderTextColor="#999"
            keyboardType="numeric"
            style={styles.input}
            value={amount}
            onChangeText={setAmount}
          />
             <TextInput
            placeholder="description"
            placeholderTextColor="#999"
            
            style={styles.input}
            value={desc}
            onChangeText={setDesc}
          />
      
<View style={styles.pickerWrapper}>
  <Picker
    selectedValue={defaultValue}
    onValueChange={setDefaultValue}
    style={styles.picker}
    mode="dropdown"
  >
    <Picker.Item label="expense" value="expense" />
    <Picker.Item label="income" value="income" />
  </Picker>



  <Ionicons
    name="chevron-down"
    size={20}
    color="black"
    style={styles.icon}
    pointerEvents="none"
  />
</View>
<CategoryItem/>




          <View style={styles.actions}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.cancel}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSave}>
              <Text style={styles.save}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  overlay: {
    flex: 1,

    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 16,
    color: "#000",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    color: "#000",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  cancel: {
    fontSize: 16,
    color: "#555",
  },
  save: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
      pickerWrapper: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 6,
    height: 50,
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  picker: {
    height: 50,
    paddingRight: 40, 
    backgroundColor: "transparent",
    color: "#000",
  },

  icon: {
    position: "absolute",
    right: 12,
  },

});
