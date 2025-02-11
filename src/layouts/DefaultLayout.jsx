import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="container py-5">
        <Outlet />
      </main>
    </>
  )
}

export default DefaultLayout
