import { useCallback, useRef } from "react"

function AddExpenseFormCompontent() {
    const expenseTitle = useRef(null)
    const openAddExpenseModal = useCallback(()=>{

    }, [])
    return (
        <form id="subject-form" aria-label="Add subject">
            <label htmlFor="subject-name">New expense</label>
            <div className="row">
                <input
                    id="subject-name"
                    name="subject"
                    type="text"
                    placeholder="e.g. Groceries"
                    autoComplete="off"
                    required={true}
                    ref = {expenseTitle}
                />
                <button type="submit" className="btn" onClick={openAddExpenseModal}>
                    Add
                </button>
            </div>
            <p id="feedback" className="feedback" aria-live="polite" />
        </form>
    )
}

export default AddExpenseFormCompontent