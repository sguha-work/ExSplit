interface AddSubjectModalProps {
    display: boolean;
    subjectName?: string;
}
function AddSubjectModalComponent(props: AddSubjectModalProps) {
    // TODO: Replace with actual member data from state/props
    const addedMembers = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Alice' },
        { id: 3, name: 'Robert Smith' }
    ];

    // TODO: Replace with actual suggestions data from search/API
    const suggestions = [
        { id: 4, name: 'Sarah Johnson', email: 'sarah@example.com', inDb: true },
        { id: 5, name: 'Mike Wilson', email: 'mike@example.com', inDb: true },
        { id: 6, name: 'newuser@example.com', email: 'newuser@example.com', inDb: false },
        { id: 7, name: 'Emma Davis', email: 'emma@example.com', inDb: true },
        { id: 8, name: 'unknown@example.com', email: 'unknown@example.com', inDb: false }
    ];

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
                            Subject name : <b>&nbsp;"{props.subjectName}"</b>
                        </div>
                        <label
                            style={{
                                fontWeight: 700,
                                fontSize: 13,
                                display: "block",
                                marginBottom: 6
                            }}
                        >
                            Search to add members by email
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
                            {suggestions.map((suggestion) => (
                                <div
                                    key={suggestion.id}
                                    className="suggestion"
                                    onClick={() => {
                                        // TODO: Add member to addedMembers logic
                                        console.log(`Add member: ${suggestion.name}`);
                                    }}
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                                        <div
                                            style={{
                                                width: '32px',
                                                height: '32px',
                                                borderRadius: '50%',
                                                backgroundColor: suggestion.inDb ? '#ecfdf5' : '#f1f5f9',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                border: `2px solid ${suggestion.inDb ? '#10b981' : '#94a3b8'}`,
                                                fontSize: '14px',
                                                flexShrink: 0
                                            }}
                                            title={suggestion.inDb ? 'Member in database' : 'Not in database'}
                                        >
                                            👤
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
                                            <span
                                                style={{
                                                    fontWeight: 600,
                                                    fontSize: '13px',
                                                    color: '#0f172a'
                                                }}
                                            >
                                                {suggestion.name}
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: '11px',
                                                    color: '#6b7280',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    whiteSpace: 'nowrap'
                                                }}
                                            >
                                                {suggestion.email}
                                            </span>
                                        </div>
                                    </div>
                                    {suggestion.inDb && (
                                        <span
                                            style={{
                                                fontSize: '10px',
                                                color: '#10b981',
                                                fontWeight: 600,
                                                padding: '2px 6px',
                                                backgroundColor: '#ecfdf5',
                                                borderRadius: '4px',
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            member of Exsplit since 2022 Jun 1
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                        <label
                            style={{
                                fontWeight: 700,
                                fontSize: 13,
                                display: "block",
                                marginTop: 12,
                                marginBottom: 6
                            }}
                        >
                            Added members ({addedMembers.length})
                        </label>
                        <div className="chips" id="added-members">
                            {/* selected members */}
                            {addedMembers.map((member) => {
                                const truncatedName = member.name.length > 5 
                                    ? `${member.name.substring(0, 5)}...` 
                                    : member.name;
                                
                                return (
                                    <div
                                        key={member.id}
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: '4px'
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: 'relative',
                                                width: '48px',
                                                height: '48px',
                                                borderRadius: '50%',
                                                backgroundColor: '#e0f2ff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                border: '2px solid #fff',
                                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                                fontSize: '18px',
                                                fontWeight: 600,
                                                color: '#0366d6'
                                            }}
                                            title={member.name}
                                        >
                                            👤
                                            <button
                                                onClick={() => {
                                                    // TODO: Remove member logic
                                                    console.log(`Remove member ${member.id}`);
                                                }}
                                                style={{
                                                    position: 'absolute',
                                                    top: '-4px',
                                                    right: '-4px',
                                                    width: '18px',
                                                    height: '18px',
                                                    borderRadius: '50%',
                                                    backgroundColor: '#e55353',
                                                    color: '#fff',
                                                    border: '2px solid #fff',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    cursor: 'pointer',
                                                    fontSize: '10px',
                                                    fontWeight: 700,
                                                    padding: 0,
                                                    lineHeight: 1,
                                                    boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                                                }}
                                                aria-label={`Remove member ${member.name}`}
                                                title="Remove member"
                                            >
                                                ×
                                            </button>
                                        </div>
                                        <span
                                            style={{
                                                fontSize: '10px',
                                                color: '#6b7280',
                                                textAlign: 'center',
                                                maxWidth: '48px',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap'
                                            }}
                                            title={member.name}
                                        >
                                            {truncatedName}
                                        </span>
                                    </div>
                                );
                            })}
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