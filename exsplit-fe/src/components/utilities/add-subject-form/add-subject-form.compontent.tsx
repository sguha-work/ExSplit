import { useCallback, useRef, useState } from "react"
import AddSubjectModalComponent from "../add-subject-modal/add-subject-modal.component"

function AddSubjectFormCompontent() {
    const subjectNameRef = useRef<HTMLInputElement>(null);
    const [subjectNameState, setSubjectNameState] = useState('');
    const [displayModal, setDisplayModal] = useState(false);
    const openAddSubjectModal = useCallback(() => {
        if (subjectNameRef && subjectNameRef.current && subjectNameRef.current.value) {
            setSubjectNameState(subjectNameRef.current.value);
            setDisplayModal(true);
        } else {
            alert("Need a name for the Subject!")
        }
    }, [])
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
                    ref={subjectNameRef}
                />
                <button type="submit" className="btn" onClick={(event)=>{
                    event.preventDefault();
                    openAddSubjectModal();
                }}>
                    Add
                </button>
                <AddSubjectModalComponent display={displayModal} subjectName={subjectNameState}></AddSubjectModalComponent>
            </div>
            <p id="feedback" className="feedback" aria-live="polite" />
        </form>
    )
}

export default AddSubjectFormCompontent