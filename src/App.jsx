import { Routes, Route } from "react-router";

import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage"
import DestinationsPage from "./Pages/DestinationsPage"
import CrewPage from "./Pages/CrewPage"
import TechnologyPage from "./Pages/TechnologyPage"
import NotFoundPage from "./Pages/NotFoundPage";

function App() {

  return (
    <main className="relative min-h-screen">
      <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/crew" element={<CrewPage />} />
          <Route path="/technology" element={<TechnologyPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </main>
  )
}

export default App
