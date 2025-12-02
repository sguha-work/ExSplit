import SubjectCardComponent from '../subject-card/subject-card.component'

function SubjectListComponent() {
    return (
        <>
            <ul id="subjects-list" className="subjects-list" aria-live="polite">
                <li className="subject-item">
                    <SubjectCardComponent></SubjectCardComponent>
                </li>
            </ul>
            <p id="empty-state" className="muted" hidden={true}>
                No subjects yet. Add one using the form below.
            </p>
        </>
    )
}

export default SubjectListComponent