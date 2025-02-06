import { Route, Routes } from "react-router"
import Home from "./page/Home"
import About from "./page/About"

function App() {
  return (

    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

    </Routes>

  )
}
export default App