import React from 'react'

function AddExpenseModalComponent() {
    return (
        <>
            <div
                id="expense-modal"
                className="modal-backdrop"
                aria-hidden="true"
                role="dialog"
                aria-modal="true"
            >
                <div className="modal" role="document" aria-labelledby="expense-title">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 8
                        }}
                    >
                        <h3 id="expense-title">Add expense — Groceries</h3>
                        <button id="expense-close" className="btn-secondary" aria-label="Close">
                            ✕
                        </button>
                    </div>
                    <form id="expense-form" >
                        <label style={{ display: "block", fontWeight: 700, marginBottom: 6 }}>
                            Description
                        </label>
                        <textarea
                            id="exp-desc"
                            className="input"
                            placeholder="e.g. Milk and bread"
                            required={true}
                            defaultValue={""}
                        />
                        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                            <div style={{ flex: 1 }}>
                                <label style={{ display: "block", fontWeight: 700, marginBottom: 6 }}>
                                    Paid by
                                </label>
                                <select id="exp-paidby" className="input">
                                    <option>Alice</option>
                                    <option>Bob</option>
                                    <option>Charlie</option>
                                </select>
                            </div>
                            <div style={{ width: 160 }}>
                                <label style={{ display: "block", fontWeight: 700, marginBottom: 6 }}>
                                    Date
                                </label>
                                <input id="exp-date" className="input" type="date" />
                            </div>
                            <div style={{ width: 150 }}>
                                <label style={{ display: "block", fontWeight: 700, marginBottom: 6 }}>
                                    Amount
                                </label>
                                <input
                                    id="exp-amount"
                                    className="input"
                                    type="number"
                                    step="0.01"
                                    min={0}
                                    placeholder={"0.0"}
                                    required={true}
                                />
                            </div>
                        </div>
                        {/* split UI */}
                        <div className="split-area" aria-hidden="false">
                            <div className="split-controls">
                                <label
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 8,
                                        fontWeight: 700
                                    }}
                                >
                                    <input type="checkbox" id="split-equal" defaultChecked={true} /> Split
                                    equally
                                </label>
                                <span className="muted">— choose members for this expense</span>
                            </div>
                            <div id="split-members" style={{ marginTop: 8 }}>
                                {/* member rows */}
                                <div className="split-row">
                                    <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                        <input
                                            type="checkbox"
                                            className="member-checkbox"
                                            data-name="Alice"
                                            defaultChecked={true}
                                        />
                                        <span className="member-name">Alice</span>
                                    </label>
                                    <input
                                        className="input member-amount"
                                        type="number"
                                        step="0.01"
                                        min={0}
                                        placeholder={"0.0"}
                                        disabled={true}
                                    />
                                </div>
                                <div className="split-row">
                                    <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                        <input
                                            type="checkbox"
                                            className="member-checkbox"
                                            data-name="Bob"
                                            defaultChecked={true}
                                        />
                                        <span className="member-name">Bob</span>
                                    </label>
                                    <input
                                        className="input member-amount"
                                        type="number"
                                        step="0.01"
                                        min={0}
                                        placeholder={"0.0"}
                                        disabled={true}
                                    />
                                </div>
                                <div className="split-row">
                                    <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                        <input
                                            type="checkbox"
                                            className="member-checkbox"
                                            data-name="Charlie"
                                            defaultChecked={true}
                                        />
                                        <span className="member-name">Charlie</span>
                                    </label>
                                    <input
                                        className="input member-amount"
                                        type="number"
                                        step="0.01"
                                        min={0}
                                        placeholder={"0.0"}
                                        disabled={true}
                                    />
                                </div>
                            </div>
                            <div id="split-warning" className="split-warning" hidden={true} />
                        </div>
                        <div className="modal-actions">
                            <button id="exp-cancel" className="btn-secondary">
                                Cancel
                            </button>
                            <button id="exp-add" className="add-expense">
                                Add expense
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default AddExpenseModalComponent