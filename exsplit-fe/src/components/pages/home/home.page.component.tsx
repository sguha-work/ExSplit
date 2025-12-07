import HeaderComponent from "../../utilities/header/header.component";
import SubjectListComponent from "../../utilities/subject-list/subject-list.component";
import AddSubjectFormCompontent from "../../utilities/add-subject-form/add-subject-form.compontent";
function HomePageComponent() {
  return (
    <>
        <main className="container">
          <HeaderComponent></HeaderComponent>
          <section className="card">
            <h2>Subjects</h2>
            <SubjectListComponent></SubjectListComponent>
          </section>
          <section className="card">
            <AddSubjectFormCompontent></AddSubjectFormCompontent>
          </section>
        </main>
      </>
  )
}

export default HomePageComponent