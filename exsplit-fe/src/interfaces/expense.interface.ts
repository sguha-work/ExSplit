import type { ExpenseMethod } from "../enums/expense-method.enum";
import type { SplitMethod } from "../enums/spent-method.enum";

export default interface Expense {
    amount: number;
    purpose: string;
    description?: string;
    comment?: string;
    spentAt: number; // UNIX timestamp
    lastUpdatedAt: number; // UNIX timestamp
    spentBy: string; // user who made the payment
    paymentMode: ExpenseMethod;
    splitMethod: SplitMethod;
    involvedMembers: Array<{
        user: string;
        share: number; // percentage of the expense
        amount?: number;
    }>
}