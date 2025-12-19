import { Routes, Route } from "react-router-dom";
import './App.css';
import LoginPageComponent from './components/pages/login/login.page.component';
import SignupPageComponent from './components/pages/signup/signup.page.component';
import HomePageComponent from './components/pages/home/home.page.component';
import SubjectPageComponent from "./components/pages/subject/subject.page.component";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPageComponent />} />
        <Route path="/signup" element={<SignupPageComponent />} />
        <Route path="/home" element={<HomePageComponent />} />

        {/* Route with dynamic param */}
        <Route path="/subject/:id" element={<SubjectPageComponent />} />

        {/* Catch-all for 404 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  )
}

export default App
