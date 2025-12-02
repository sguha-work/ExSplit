function AddExpenseFormCompontent() {
    return (
        <form id="subject-form" aria-label="Add subject">
            <label htmlFor="subject-name">New subject</label>
            <div className="row">
                <input
                    id="subject-name"
                    name="subject"
                    type="text"
                    placeholder="e.g. Groceries"
                    autoComplete="off"
                    required={true}
                />
                <button type="submit" className="btn">
                    Add
                </button>
            </div>
            <p id="feedback" className="feedback" aria-live="polite" />
        </form>
    )
}

export default AddExpenseFormCompontent