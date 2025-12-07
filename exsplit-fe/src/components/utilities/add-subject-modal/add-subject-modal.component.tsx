interface AddSubjectModalProps {
    display: boolean;
    subjectName?: string;
}
function AddSubjectModalComponent(props: AddSubjectModalProps) {
    return (
        <>
            <div
                id="modal-backdrop"
                className="modal-backdrop"
                role="dialog"
                aria-modal="true"
                style={{ "display": props.display ? "flex" : "none" }}
            >
                <div className="modal" role="document" aria-labelledby="modal-title">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 8
                        }}
                    >
                        <h3 id="modal-title">Create Subject</h3>
                        <button id="modal-close" className="btn-secondary" aria-label="Close">
                            ✕
                        </button>
                    </div>
                    <div>
                        <div className="sub-name" id="modal-subject">
                            Subject name :--&gt; <b>&nbsp;"{props.subjectName}"</b>
                        </div>
                        <label
                            style={{
                                fontWeight: 700,
                                fontSize: 13,
                                display: "block",
                                marginBottom: 6
                            }}
                        >
                            Search members by email
                        </label>
                        <div className="row">
                            <input
                                id="member-search"
                                className="search"
                                placeholder="Search by email or name"
                            />
                            <button
                                id="dummy-search-clear"
                                className="btn-secondary"
                                title="Clear"
                            >
                                Clear
                            </button>
                        </div>
                        <div id="suggestions" className="suggestions" aria-live="polite">
                            {/* suggestions get inserted here */}
                        </div>
                        <div className="chips" id="added-members">
                            {/* selected members */}
                        </div>
                        <div className="modal-actions">
                            <button id="cancel-create" className="btn-secondary">
                                Cancel
                            </button>
                            <button id="confirm-create" className="add-btn">
                                Create Subject
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddSubjectModalComponent