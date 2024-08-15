import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProjectDetailsPage from "./pages/ProjectDetailsPage"
import RewardsPage from "./pages/RewardsPage"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-[100]">
        <Navbar />
      </div>
      <div className="mt-[64px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projectdetails" element={<ProjectDetailsPage />} />
          <Route path="/rewards" element={<RewardsPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
