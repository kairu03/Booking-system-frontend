import { Routes, Route } from "react-router-dom"
import { Login } from "../pages/auth/Login"
import { Register } from "../pages/auth/Register"
import { Home } from "../pages/Home"
import { ResourcesPage } from "../pages/ResourcesPage"

export const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/categories/:categoryId/resources" element={ <ResourcesPage />} />
    </Routes>
  )
}