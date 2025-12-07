export const ExpenseMethod = {
  cc: "Credit Card",
  dc: "Debit Card",
  upi: "UPI",
  cash: "Cash",
} as const;

export type ExpenseMethod = keyof typeof ExpenseMethod;