import React from 'react'

function ExpenseTableComponent() {
    return (
        <>
            <table className="expenses" aria-label="Expenses">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th style={{ width: 160 }}>Paid by</th>
                        <th style={{ width: 120 }}>Date</th>
                        <th style={{ width: 120, textAlign: "right" }}>Amount</th>
                    </tr>
                </thead>
                <tbody id="expenses-body">
                    <tr>
                        <td>Weekly groceries (Wholefoods)</td>
                        <td>Alice</td>
                        <td>2025-11-22</td>
                        <td className="amount" data-amount="72.45">
                            $72.45
                        </td>
                    </tr>
                    <tr>
                        <td>Vegetables &amp; fruits</td>
                        <td>Bob</td>
                        <td>2025-11-18</td>
                        <td className="amount" data-amount="24.30">
                            $24.30
                        </td>
                    </tr>
                    <tr>
                        <td>Snacks</td>
                        <td>Bob</td>
                        <td>2025-11-16</td>
                        <td className="amount" data-amount="9.99">
                            $9.99
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="total-row">
                        <td colSpan={3} style={{ textAlign: "right" }}>
                            Total
                        </td>
                        <td id="total-amount" style={{ textAlign: "right" }}>
                            $106.74
                        </td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

export default ExpenseTableComponent