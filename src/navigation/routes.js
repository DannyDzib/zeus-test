import Home from "screens/Home"
import Workers from "screens/Workers"
import Groups from "screens/Groups"
import { Navigate } from "react-router-dom"
const routes = [
  {
    path: "/",
    name: "Inicio",
    element: <Home />,
  },
  {
    path: "/workers",
    name: "Empleados",
    element: <Workers />,
  },
  {
    path: "/groups",
    name: "Grupos",
    element: <Groups />,
  },
  {
    path: "*",
    name: "Redirect",
    element: <Navigate to="/" replace />,
    isRedirec: true,
  },
]

export default routes
