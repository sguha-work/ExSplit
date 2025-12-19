function SubjectCardComponent() {
    return (
        <>
            <div className="subject-meta">
                <div className="subject-icon">GR</div>
                <div>
                    <div>Groceries</div>
                    <div className="meta-line">
                        <span className="count">Members: 3</span>
                        <span className="status status-active">Active</span>
                        {/* <span className="status status-settled">Settled</span> */}
                        <span className="muted">Created 5 days ago on (19-12-2025 10:10PM)</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubjectCardComponent