import HomePage from "./pages/HomePage"
import Detail from "./pages/Detail"
import DefaultLayout from "./layouts/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalProvider } from "./contexts/GlobalContext"
const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:id" element={<Detail />} />

          </Route>
        </Routes>
      </BrowserRouter>

    </GlobalProvider>
  )
}

export default App
