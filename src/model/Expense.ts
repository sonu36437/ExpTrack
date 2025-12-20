export type ExpenseType = "income" | "expense";

export type Expense = {
  id: Date;
  title: string;
  desc: string;
  amount: number;
  type: ExpenseType;
  date: string; 
};
