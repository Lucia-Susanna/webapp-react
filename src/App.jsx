import HomePage from "./pages/HomePage"
import Detail from "./pages/Detail"
import DefaultLayout from "./layouts/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail" element={<Detail />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
