import { Route, Routes } from "react-router"
import Home from "@/page/frontend/Home"
import About from "@/page/frontend/About"

function App() {
  return (

    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

    </Routes>

  )
}
export default App