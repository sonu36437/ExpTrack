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
  |"from parents"


  // Fallback
  | "other";
  export const EXPENSE_CATEGORIES = [
  "food",
  "groceries",
  "transport",
  "rent",
  "utilities",
  "shopping",
  "health",
  "education",
  "entertainment",
  "subscriptions",
  "insurance",
  "travel",
  "personal",
  "gifts",
  "charity",
  "loan",
  "tax",
  "salary",
  "business",
  "freelance",
  "bonus",
  "investment",
  "interest",
  "refund",
  "from parents"
];



export type Expense = {
  id: Date;
  title: string;
  desc?: string;
  amount: number;
  category:string;
  type: ExpenseType;
  date: string; 
};
