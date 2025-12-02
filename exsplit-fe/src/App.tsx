import './App.css'
import AddExpenseFormCompontent from './components/utilities/add-expense-form/add-expense-form.compontent'
import AddSubjectModalComponent from './components/utilities/add-subject-modal/add-subject-modal.component'
import HeaderComponent from './components/utilities/header/header.component'
import SubjectListComponent from './components/utilities/subject-list/subject-list.component'

function App() {

  return (
    <>
      <>
        <main className="container">
          <HeaderComponent></HeaderComponent>
          <section className="card">
            <h2>Subjects</h2>
            <SubjectListComponent></SubjectListComponent>
          </section>
          <section className="card">
            <AddExpenseFormCompontent></AddExpenseFormCompontent>
          </section>
        </main>
        {/* added: modal for adding members to a new subject */}
        <AddSubjectModalComponent></AddSubjectModalComponent>
      </>

    </>
  )
}

export default App
