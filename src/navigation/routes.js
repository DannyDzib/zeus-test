import Home from "screens/Home"
import Workers from "screens/Workers"

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Home,
  },
  {
    path: "/workers",
    name: "Empleados",
    component: Workers,
  },
]

export default routes
