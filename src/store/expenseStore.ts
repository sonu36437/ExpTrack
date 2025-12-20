import { create } from "zustand";
import { Expense, ExpenseType } from "../model/Expense";
import { getExpenses, setExpenses } from "../storage/expenseStorage";
import { isTodaysTransactions } from "../utils/helperMethods";

type TransactionPayload = {
  title: string;
  desc: string;
  amount: number;
  type: ExpenseType;
};

type ExpenseStore = {
  expenses: Expense[];

  hydrate: () => void;
  hydrated: boolean;
  addTransaction: (payload: TransactionPayload) => void;
  totalIncome: number,
  totalExpenses: number,
  totalAmount: number,
  currentSelectedTransaction:Expense|null,
  setCurrentlySelectedTransaction:(item:Expense|null)=>void,
  todaysTransactions:Expense[];
  removeTransaction: (id: Date) => void;
  calculateTotal: () => void;
 
  lastMonth: () => Expense[];
  lastThreeMonths: () => Expense[];
  lastSixMonths: () => Expense[];
  lastOneYear: () => Expense[];
};

export const useExpenseStore = create<ExpenseStore>((set, get) => ({
  expenses: [],
  hydrated: false,
  todaysTransactions:[],
  totalAmount: 0,
  totalExpenses: 0,
  totalIncome: 0,
  currentSelectedTransaction:null,
  

  hydrate: () => {
    const data = getExpenses();
    const todaysTrans=data.filter((e)=>isTodaysTransactions(e.date,new Date()))
    console.log(todaysTrans);
    
    set({ todaysTransactions: todaysTrans, hydrated: true,expenses:data })
    get().calculateTotal();


  },
  setCurrentlySelectedTransaction(item) {
    set({currentSelectedTransaction:item})
    
  },
  
  calculateTotal: () => {

    const totalExpense = get().expenses
      .filter((trans) => trans.type === "expense")
      .reduce((sum, trans) => sum + trans.amount, 0);
    const totlIncome = get().expenses
      .filter((trans) => trans.type == 'income')
      .reduce((sum, trans) => sum += trans.amount, 0)
    const totalAmountLeft = totlIncome - totalExpense;
    set({ totalAmount: totalAmountLeft, totalIncome: totlIncome, totalExpenses: totalExpense })





  },


  addTransaction: ({ title, desc, amount, type }) => {
    const newTransaction: Expense = {
      id: new Date(),
      title,
      desc,
      amount,
      type,
      date: new Date().toISOString(),
    };

    const updatedTransaction = [newTransaction, ...get().expenses];
    const todaysTrans=updatedTransaction.filter((e)=>isTodaysTransactions(e.date,new Date()));
    setExpenses(updatedTransaction);
    set({ expenses: updatedTransaction ,todaysTransactions:todaysTrans})
    get().calculateTotal();


  },

  removeTransaction: (_id: Date) => {
    const updatedItem = get().expenses.filter((e) => e.id !== _id)
    setExpenses(updatedItem);
    set({ expenses: updatedItem });
  },



  lastMonth: () => [],

  lastThreeMonths: () => [],

  lastSixMonths: () => [],

  lastOneYear: () => [],
}));
