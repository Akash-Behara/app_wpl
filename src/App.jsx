import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProjectDetailsPage from "./pages/ProjectDetailsPage"

function App() {

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projectdetails" element={<ProjectDetailsPage />} />
      </Routes>
    </div>
  )
}

export default App
