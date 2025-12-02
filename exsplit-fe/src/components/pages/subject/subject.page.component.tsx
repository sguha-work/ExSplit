import AddExpenseModalComponent from "../../utilities/add-expense-modal/add-expense-modal.component"
import SubjectDetailsComponent from "../../utilities/subject-details/subject-details.component"
import "./subject.page.component.css"

function SubjectPageComponent() {
    return (
        <>
            <main className="container" style={{ maxWidth: 820 }}>
                <header style={{ marginBottom: 18 }}>
                    <a
                        href="index.html"
                        style={{
                            color: "var(--accent)",
                            fontSize: 13,
                            fontWeight: 700,
                            textDecoration: "none"
                        }}
                    >
                        ← Back to subjects
                    </a>
                    <h1 style={{ margin: "8px 0 0 0", fontSize: 20 }}>Subject: Groceries</h1>
                    <p className="muted" style={{ margin: "6px 0 0 0" }}>
                        Group for shared grocery expenses
                    </p>
                </header>
                <section className="card">
                    <SubjectDetailsComponent></SubjectDetailsComponent>
                </section>
                <AddExpenseModalComponent></AddExpenseModalComponent>
            </main>

        </>
    )
}

export default SubjectPageComponent