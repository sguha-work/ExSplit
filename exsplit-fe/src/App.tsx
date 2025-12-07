import { Routes, Route } from "react-router-dom";
import './App.css';
import HomePageComponent from './components/pages/home/home.page.component'
import SubjectPageComponent from "./components/pages/subject/subject.page.component";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePageComponent />} />

        {/* Route with dynamic param */}
        <Route path="/subject/:id" element={<SubjectPageComponent />} />

        {/* Catch-all for 404 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  )
}

export default App
