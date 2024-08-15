import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProjectDetailsPage from "./pages/ProjectDetailsPage"
import RewardsPage from "./pages/RewardsPage"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projectdetails" element={<ProjectDetailsPage />} />
        <Route path="/rewards" element={<RewardsPage />} />
      </Routes>
    </div>
  )
}

export default App
