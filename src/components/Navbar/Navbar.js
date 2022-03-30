import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { Link as RouterLink } from "react-router-dom"
import routes from "navigation/routes"
import sx from './styles'
export default function ButtonAppBar() {
  return (
    <Container maxWidth="lg" sx={sx.container}>
      <AppBar position="static" sx={sx.appBar}>
        <Toolbar>
          <Typography
            variant="h6"
            component="p"
            color="secondary"
            sx={sx.employe}
          >
            Zeus
          </Typography>
          {routes.map((route, index) => (
            <Button
              component={RouterLink}
              to={route.path}
              key={index}
              color="secondary"
            >
              {route.name}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Container>
  )
}
