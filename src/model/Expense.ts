export type ExpenseType = "income" | "expense";
export type ExpenseCategory =
  // Expenses
  | "food"
  | "groceries"
  | "transport"
  | "rent"
  | "utilities"
  | "shopping"
  | "health"
  | "education"
  | "entertainment"
  | "subscriptions"
  | "insurance"
  | "travel"
  | "personal"
  | "gifts"
  | "charity"
  | "loan"
  | "tax"

  // Income
  | "salary"
  | "business"
  | "freelance"
  | "bonus"
  | "investment"
  | "interest"
  | "refund"

  // Fallback
  | "other";


export type Expense = {
  id: Date;
  title: string;
  desc: string;
  amount: number;
  type: ExpenseType;
  date: string; 
};
