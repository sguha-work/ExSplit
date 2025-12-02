import ExpenseTableComponent from "../expense-table/expense-table.component"

function SubjectDetailsComponent() {
    return (
        <>
            <div className="header-row">
                <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div
                            className="subject-icon"
                            style={{ width: 44, height: 44, fontSize: 16, borderRadius: 10 }}
                        >
                            GR
                        </div>
                        <div>
                            <div style={{ fontWeight: 800 }}>Groceries</div>
                            <div className="meta">
                                <span className="count">Members: 3</span>
                                <span
                                    className="status status-active"
                                    style={{ fontWeight: 700 }}
                                >
                                    Active
                                </span>
                                <span className="muted">Created 5 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="controls">
                    <button id="add-expense-btn" className="add-expense">
                        Add expense
                    </button>
                </div>
            </div>
            {/* expenses table */}
            <ExpenseTableComponent></ExpenseTableComponent>
        </>
    )
}

export default SubjectDetailsComponent